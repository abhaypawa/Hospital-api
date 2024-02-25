
# Hospital APi
We’re going to design an API for the doctors of a Hospital which has been allocated by the govt for testing and quarantine + well being of  COVID-19 patients
There can be 2 types of Users
Doctors
Patients
Doctors can log in
Each time a patient visits, the doctor will follow 2 steps
Register the patient in the app (using phone number, if the patient already exists, just return the patient info in the API)
After the checkup, create a Report
Patient Report will have the following fields
Created by doctor
Status :
Can be either of: [Negative, Travelled-Quarantine, Symptoms-Quarantine, Positive-Admit]


# Setup the Project
Clone or Download the Repo.
Run npm start to ignite the project.
Use Postman to test the api.

## Port:
https://localhost/8000

# Routes
Register a Doctor: [POST]: /api/v1/doctors/register  

Login for Doctor: [POST]: /api/v1/doctors/login  

Register a patient: [POST]: /api/v1/patients/register  

Create Patient report: [POST]: /api/v1/patients/:id/create-report    

Fetch All Reports of a Patient [GET]: /api/v1/patients/:id/all-report  

Fetch All Reports Based on a Status: [GET]: /api/v1/reports/:status

# tools Used:
Node.js
Express js
MongoDB Atlas
