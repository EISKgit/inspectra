# models.py

from sqlalchemy import Column, Integer, String
from database import Base


class Scan(Base):
    __tablename__ = "scans"

    id = Column(Integer, primary_key=True, index=True)

    url = Column(String, nullable=False)

    scan_type = Column(String, nullable=False)

    max_pages = Column(Integer, nullable=False)

    status = Column(String, default="PENDING")

    screenshot_path = Column(String, nullable=True)