# worker.py

from playwright.sync_api import sync_playwright
from sqlalchemy.orm import Session

from models import Scan


def run_scan(scan_id: int, db: Session):

    scan = db.query(Scan).filter(Scan.id == scan_id).first()

    if not scan:
        return

    try:
        scan.status = "RUNNING"
        db.commit()

        screenshot_file = (
            f"screenshots/scan_{scan.id}.png"
        )

        with sync_playwright() as p:

            browser = p.chromium.launch(
                headless=True
            )

            page = browser.new_page()

            page.goto(
                scan.url,
                wait_until="networkidle",
                timeout=30000,
            )

            page.screenshot(
                path=screenshot_file,
                full_page=True,
            )

            browser.close()

        scan.status = "COMPLETED"
        scan.screenshot_path = screenshot_file

        db.commit()

    except Exception as e:

        scan.status = "FAILED"

        db.commit()

        print(e)
