from fastapi import FastAPI, Depends
from database import engine, Base
from sqlalchemy.orm import Session
from database import SessionLocal
from models import Scan
from fastapi.middleware.cors import CORSMiddleware

Base.metadata.create_all(bind=engine)

app = FastAPI()
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
def create_scan(data: dict, db: Session = Depends(get_db)):
    scan = Scan(
        url=data["url"],
        scan_type=data["scan_type"],
        max_pages=data["max_pages"],
    )

    db.add(scan)
    db.commit()
    db.refresh(scan)

    return {"id": scan.id, "message": "Scan created"}


@app.get("/scans")
def get_scans(db: Session = Depends(get_db)):
    return db.query(Scan).all()
