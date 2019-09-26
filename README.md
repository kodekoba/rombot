# This project was created as an assessment for my qualifications for the position of Full-Stack Engineer at RomBot

## Instructions to run application
Download zip file <br />

### Server terminal:
cd rombot-master <br />
virtualenv --python=python3 venv <br />
source venv/bin/activate <br />
cd main <br />
pip install -r requirements.txt <br />
python manage.py makemigrations <br />
python manage.py migrate <br />
python manage.py runserver <br />

### Frontend terminal:
cd rombot-master <br />
cd angular <br />
npm install <br />
ng build <br />
ng serve <br />
