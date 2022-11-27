import text2emotion as te
from pydantic import BaseModel
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

def emotion_output(text):
    # try:
        emotion_dict = te.get_emotion(text)
        return emotion_dict
    


app = FastAPI()

origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:8080",
    "http://localhost:8000",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Req(BaseModel):
    text: str

@app.post("/emotion")
async def main(req: Req):
    print(req.text)
    # return {}
    return emotion_output(req.text)