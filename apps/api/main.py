from fastapi import FastAPI, Depends
from database import engine, Base
from sqlalchemy.orm import Session
from database import SessionLocal
from models import Scan
from fastapi.middleware.cors import CORSMiddleware

from threading import Thread
from worker import run_scan
import models
from fastapi.staticfiles import StaticFiles
from pathlib import Path

Base.metadata.create_all(bind=engine)

app = FastAPI()

BASE_DIR = Path(__file__).parent

app.mount(
    "/screenshots",
    StaticFiles(directory=BASE_DIR / "screenshots"),
    name="screenshots",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # better than "*"
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.get("/health")
def health():
    return {"status": "ok"}


@app.post("/scans/create")
def create_scan(
    data: dict,
    db: Session = Depends(get_db),
):

    scan = Scan(
        url=data["url"],
        scan_type=data["scan_type"],
        max_pages=data["max_pages"],
        status="PENDING",
    )

    db.add(scan)

    db.commit()

    db.refresh(scan)

    Thread(
        target=run_scan,
        args=(scan.id, SessionLocal()),
        daemon=True,
    ).start()

    return {
        "id": scan.id,
        "status": "PENDING",
    }


@app.get("/scans")
def get_scans(db: Session = Depends(get_db)):
    return db.query(Scan).all()
