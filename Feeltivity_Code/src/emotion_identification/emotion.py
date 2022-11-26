import sys
import requests
import text2emotion as te

def emotion_output(text):
    dcde = (requests.utils.unquote(text))
    try:
        emotion_dict = te.get_emotion(dcde)
        print(f"{emotion_dict['Happy']},{emotion_dict['Angry']},{emotion_dict['Surprise']},{emotion_dict['Sad']},{emotion_dict['Fear']}", end="")
        sys.stdout.flush()
    except: 
        pass

text = sys.argv[1]
text.replace('\r', '')
text.replace('\n', ' ')

emotion_output(text)