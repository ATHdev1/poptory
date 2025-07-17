import smtplib
from email.mime.text import MIMEText
import os

def send_verification_email(email, code):
    sender = os.getenv("EMAIL_USER")
    password = os.getenv("EMAIL_PASS")

    msg = MIMEText(f"인증 코드: {code}")
    msg['Subject'] = "팝업스토어 회원가입 인증 코드"
    msg['From'] = sender
    msg['To'] = email

    with smtplib.SMTP_SSL("smtp.gmail.com", 465) as smtp:
        smtp.login(sender, password)
        smtp.send_message(msg)
