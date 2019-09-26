# This project was created as an assessment for my qualifications for the position of Full-Stack Engineer at RomBot
Built with Python 2.7.10 and npm 6.11.3

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

## Usage
The landing page at localhost:4200/ has a search functionality which queries Open Skills API by job title. The response gives us an ID of the job title which we save to later query GitHub Jobs API. This ultimately allows us to search for jobs by job title and location.
