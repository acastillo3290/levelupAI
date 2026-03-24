import requests
from bs4 import BeautifulSoup
import os
from .models import StudyPlan
from openai import OpenAI

def fetch_job_description(url: str) -> str:
    try:
        response = requests.get(url)
        response.raise_for_status()
        soup = BeautifulSoup(response.text, "html.parser")
        # This is a very naive way to extract job description. Real sites will require more complex parsing.
        description = soup.find("div", class_="job-description")
        return description.get_text(strip=True) if description else "No description found."
    except Exception as e:
        return f"Error fetching job description: {str(e)}"
    
client = OpenAI(api_key=os.getenv('OPENAI_API_KEY')
client = OpenAI(api_key=os.getenv('OPENAI_API_KEY'))

def analyze_job(text):
    try:
        response = client.chat.completions.create(
            model="gpt-4o",
            messages=[
                {
                    "role": "system",
                    "content": "You are a helpful assistant that extracts key skills and topics from job descriptions.",
                },
                {"role": "user", "content": f"Analyze this job description and list the key skills and topics: {text}"},
            ],
        )
        return response.choices[0].message.content
    except Exception as e:
        return f"Error analyzing job description: {str(e)}"