import { Description } from '@mui/icons-material'
export type CourseData = {
  photo:string;
  name: string;
  category: string;
  state: string;
  description: string[];
};
export const coursesData = [
  {
    "photo": "https://www.aiims.edu/images/com_fwgallery/files/806/aiims-central-lawn.JPG",
    "name": "All India Institute of Medical Sciences, New Delhi",
    "category": "New Delhi",
    "state": "Delhi",
    "description": ["Medicine", "Surgery", "Pediatrics", "Obstetrics and Gynecology", "Anesthesiology"]
},
{
    "photo": "manipal-mangalore-logo.jpg",
    "name": "Kasturba Medical College, Mangalore, Manipal Academy of Higher Education",
    "category": "Mangalore",
    "state": "Karnataka",
    "description": ["MBBS", "MD", "MS", "M.Ch.", "DM", "Ph.D."]
},
{
    "photo": "mmu-logo.jpg",
    "name": "Maharishi Markandeshwar University, Mullana",
    "category": "Mullana",
    "state": "Haryana",
    "description": ["MBBS", "MD", "MS", "M.Ch.", "DM", "Ph.D."]
},
{
    "photo": "dmc-logo.jpg",
    "name": "Dayanand Medical College and Hospital",
    "category": "Ludhiana",
    "state": "Punjab",
    "description": ["MBBS", "MD", "MS", "M.Ch.", "DM", "Ph.D."]
},
{
    "photo": "jss-medical-logo.jpg",
    "name": "JSS Medical College, JSS Academy of Higher Education and Research",
    "category": "Mysore",
    "state": "Karnataka",
    "description": ["MBBS", "MD", "MS", "M.Ch.", "DM", "Ph.D."]
},
{
    "photo": "psg-medical-logo.jpg",
    "name": "PSG Institute of Medical Sciences and Research",
    "category": "Coimbatore",
    "state": "Tamil Nadu",
    "description": ["MBBS", "MD", "MS", "M.Ch.", "DM", "Ph.D."]
},
{
    "photo": "ramaiah-medical-logo.jpg",
    "name": "M S Ramaiah Medical College",
    "category": "Bangalore",
    "state": "Karnataka",
    "description": ["MBBS", "MD", "MS", "M.Ch.", "DM", "Ph.D."]
},
{
    "photo": "mgm-logo.jpg",
    "name": "Mahatma Gandhi Medical College and Research Institute, Sri Balaji Vidyapeeth",
    "category": "Pondicherry",
    "state": "Puducherry",
    "description": ["MBBS", "MD", "MS", "M.Ch.", "DM", "Ph.D."]
},
{
    "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Lady_Willingdon_CMC_Ludhiana_from_lawns.jpg/1280px-Lady_Willingdon_CMC_Ludhiana_from_lawns.jpg",
    "name": "Christian Medical College, Ludhiana",
    "category": "Ludhiana",
    "state": "Punjab",
    "description": ["Anatomy", "Physiology", "Biochemistry", "Pharmacology", "Pathology"]
},
{
    "photo": "https://nimhans.co.in/wp-content/uploads/2019/10/full-view-of-Admin-building01.jpg",
    "name": "National Institute of Mental Health and Neuro Sciences, Bangalore",
    "category": "Bangalore",
    "state": "Karnataka",
    "description": ["Neurology", "Psychiatry", "Clinical Psychology", "Neurosurgery", "Neuroradiology"]
},
{
    "photo": "https://afmc.nic.in/Departments/AboutAFMC/imagegallery/4.jpg",
    "name": "Armed Forces Medical College, Pune",
    "category": "Pune",
    "state": "Maharashtra",
    "description": ["Forensic Medicine", "Microbiology", "Ophthalmology", "Dermatology", "ENT"]
},
{
    "photo": "https://www.sctimst.ac.in/images/slide_images/web%20sct%20pan1.jpg",
    "name": "Sree Chitra Tirunal Institute for Medical Sciences and Technology, Trivandrum",
    "category": "Trivandrum",
    "state": "Kerala",
    "description": ["Cardiology", "Radiology", "Cardiothoracic Surgery", "Medical Imaging", "Biomedical Engineering"]
},
{
    "photo": "https://jipmer.edu.in/sites/default/files/jipmer-entrance.jpg",
    "name": "Jawaharlal Institute of Postgraduate Medical Education and Research, Puducherry",
    "category": "Puducherry",
    "state": "Puducherry",
    "description": ["Nephrology", "Endocrinology", "Gastroenterology", "Plastic Surgery", "Urology"]
},
{
    "photo": "https://neigrihms.gov.in/images/3.JPG",
    "name": "North Eastern Indira Gandhi Regional Institute of Health and Medical Sciences, Shillong",
    "category": "Shillong",
    "state": "Meghalaya",
    "description": ["General Medicine", "Pulmonology", "Rheumatology", "Community Medicine", "Nursing"]
},
{
    "photo": "https://jssaherstorage.blob.core.windows.net/jssuudstorage/udpimages/medical-college-overview.jpg",
    "name": "JSS Medical College, Mysore",
    "category": "Mysore",
    "state": "Karnataka",
    "description": ["Orthopedics", "Oncology", "Hematology", "Anatomy", "Physiology"]
},
{
    "photo": "https://website.aiimsraipur.edu.in/web_image/lkp_2.jpg",
    "name": "All India Institute of Medical Sciences, Raipur",
    "category": "Raipur",
    "state": "Chhattisgarh",
    "description": ["Biochemistry", "Microbiology", "Immunology", "Neonatology", "Gynecological Oncology"]
},
{
    "photo": "https://www.gmcmewat.ac.in/images/Hospital1.jpg",
    "name": "Shaheed Hasan Khan Mewati Government Medical College, Nalhar",
    "category": "Nalhar",
    "state": "Haryana",
    "description": ["Emergency Medicine", "Family Medicine", "Geriatrics", "Tropical Medicine", "Hospice and Palliative Medicine"]
},
{
    "photo": "https://www.skims.ac.in/images/Pictures/skims04.jpg",
    "name": "Sher-i-Kashmir Institute of Medical Sciences, Srinagar",
    "category": "Srinagar",
    "state": "Jammu and Kashmir",
    "description": ["Cardiovascular Surgery", "Neurosurgery", "Plastic and Reconstructive Surgery", "Pediatric Surgery", "Surgical Oncology"]
},
{
    "photo": "https://maldazillaparishad.in/images_malda/malda_medical_college2.jpg",
    "name": "Malda Medical College and Hospital, Malda",
    "category": "Malda",
    "state": "West Bengal",
    "description": ["General Surgery", "Ophthalmology", "Orthopedics", "Anesthesiology", "Radiodiagnosis"]
},
{
    "photo": "https://www.kem.edu/gsmckemh/wp-content/uploads/2017/05/DSC00028-1-1000x250.jpg",
    "name": "King Edward Memorial Hospital and Seth Gordhandas Sunderdas Medical College, Mumbai",
    "category": "Mumbai",
    "state": "Maharashtra",
    "description": ["Cardiology", "Nephrology", "Oncology", "Pediatrics", "Rheumatology"]
},
{
    "photo": "https://medical.srmist.edu.in/wp-content/uploads/2022/12/Medical-College-Common-Banner.jpg",
    "name": "SRM Medical College Hospital and Research Centre, Chennai",
    "category": "Chennai",
    "state": "Tamil Nadu",
    "description": ["Dermatology", "Gynecology", "Orthopedics", "Pediatrics", "Urology"]
},
{
    "photo": "https://mcpune.bharatividyapeeth.edu/images/1_College_170523.jpg",
    "name": "Bharati Vidyapeeth Deemed University Medical College, Pune",
    "category": "Pune",
    "state": "Maharashtra",
    "description": ["Anatomy", "Physiology", "Biochemistry", "Forensic Medicine", "Psychiatry"]
},
{
    "photo": "aj-medical-mangalore-logo.jpg",
    "name": "A.J. Institute of Medical Sciences and Research Centre, Mangalore",
    "category": "Mangalore",
    "state": "Karnataka",
    "description": ["MD", "MBBS", "MS", "M.Ch.", "DM", "PG Diploma"]
},
{
    "photo": "aarupadai-veedu-puducherry-logo.jpg",
    "name": "Aarupadai Veedu Medical College and Hospital, puducherry, Tamil Nadu - Other",
    "category": "Puducherry",
    "state": "Puducherry",
    "description": ["MBBS", "MD", "MS", "PG Diploma"]
},
{
    "photo": "acharya-shri-chander-jammu-logo.jpg",
    "name": "Acharya Shri Chander College of Medical Sciences, Jammu",
    "category": "Jammu",
    "state": "Jammu and Kashmir",
    "description": ["MBBS", "MD", "MS"]
},
{
    "photo": "acms-delhi-logo.jpg",
    "name": "ACMS - Army College of Medical Sciences, Delhi",
    "category": "Delhi",
    "state": "Delhi",
    "description": ["MBBS"]
},
{
    "photo": "acpm-dhule-logo.jpg",
    "name": "ACPM Medical College, Dhule",
    "category": "Dhule",
    "state": "Maharashtra",
    "description": ["MBBS", "MS", "PG Diploma", "MD"]
},
{
    "photo": "acs-medical-chennai-logo.jpg",
    "name": "ACS Medical College and Hospital, Dr MGR Educational and Research Institute, Chennai",
    "category": "Chennai",
    "state": "Tamil Nadu",
    "description": ["MD", "MBBS", "MS"]
},
{
  "photo": "acsr-nellore-logo.jpg",
  "name": "ACSR Government Medical College, Nellore",
  "category": "Nellore",
  "state": "Andhra Pradesh",
  "description": ["MBBS", "B.Sc.", "MD", "MS"]
},
{
  "photo": "adesh-kurukshetra-logo.jpg",
  "name": "Adesh Medical College and Hospital, Kurukshetra",
  "category": "Kurukshetra",
  "state": "Haryana",
  "description": ["MBBS", "MD", "MS"]
},
{
  "photo": "adesh-bathinda-logo.jpg",
  "name": "Adesh University, Bathinda",
  "category": "Bathinda",
  "state": "Punjab",
  "description": ["B.Sc.", "BDS", "BPT", "GNM", "MBBS", "MD", "B.Pharma", "UG Diploma", "Pharm.D", "M.Sc."]
},
{
  "photo": "adichunchanagiri-mandya-logo.jpg",
  "name": "Adichunchanagiri Institute of Medical Sciences, Mandya",
  "category": "Mandya",
  "state": "Karnataka",
  "description": ["MBBS", "MD", "MS", "PG Diploma"]
},
{
  "photo": "agartala-medical-college-logo.jpg",
  "name": "Agartala Government Medical College",
  "category": "Agartala",
  "state": "Tripura",
  "description": ["MBBS", "MD", "MS"]
},
{
  "photo": "aiims-bathinda-logo.jpg",
  "name": "AIIMS Bathinda - All India Institute of Medical Sciences",
  "category": "Bathinda",
  "state": "Punjab",
  "description": ["MBBS", "B.Sc.", "Certificate"]
},
{
  "photo": "aiims-bhopal-logo.jpg",
  "name": "AIIMS Bhopal - All India Institute of Medical Sciences",
  "category": "Bhopal",
  "state": "Madhya Pradesh",
  "description": ["MD", "MBBS", "B.Sc.", "MS", "M.Sc.", "DM", "Ph.D.", "GNM", "M.Ch."]
},
{
  "photo": "aiims-deoghar-logo.jpg",
  "name": "AIIMS Deoghar - All India Institute of Medical Sciences, Jharkhand - Other",
  "category": "Jharkhand - Other",
  "state": "Jharkhand",
  "description": ["B.Sc.", "MBBS"]
},
{
  "photo": "aiims-gorakhpur-logo.jpg",
  "name": "AIIMS Gorakhpur - All India Institute of Medical Sciences",
  "category": "Gorakhpur",
  "state": "Uttar Pradesh",
  "description": ["MBBS"]
},
{
  "name": "AIIMS Hyderabad - All India Institute of Medical Sciences",
  "category": "Hyderabad",
  "state": "Telangana",
  "description": ["MBBS", "MD", "MS"]
},
{
  "name": "AIIMS Jodhpur - All India Institute of Medical Sciences",
  "category": "Jodhpur",
  "state": "Rajasthan",
  "description": ["B.Sc.", "MPH", "MD", "M.Sc.", "DM", "MBBS", "M.Ch.", "MS", "MDS"]
},
{
  "name": "AIIMS Kalyani - All India Institute of Medical Sciences",
  "category": "Kalyani",
  "state": "West Bengal",
  "description": ["MBBS"]
},
{
  "name": "AIIMS Mangalagiri - All India Institute of Medical Sciences, Vijayawada",
  "category": "Vijayawada",
  "state": "Andhra Pradesh",
  "description": ["MBBS", "B.Sc.", "MD", "Master of Surgery"]
},
{
  "name": "AIIMS Nagpur - All India Institute of Medical Sciences",
  "category": "Nagpur",
  "state": "Maharashtra",
  "description": ["B.Sc.", "MBBS", "MS", "MD"]
},
{
  "name": "AIIMS Raebareli - All India Institute of Medical Sciences",
  "category": "Raebareli",
  "state": "Uttar Pradesh",
  "description": ["MBBS"]
},
{
  "name": "AIIMS Rishikesh - All India Institute of Medical Sciences",
  "category": "Rishikesh",
  "state": "Uttarakhand",
  "description": ["B.Sc.", "M.Sc.", "MD", "M.Ch.", "MPH", "MBBS", "PG Diploma", "MDS", "MS", "Certificate"]
},
{
  "name": "Al-Azhar Medical College and Super Speciality Hospital, Idukki",
  "category": "Idukki",
  "state": "Kerala",
  "description": ["MBBS", "MD", "MS"]
},
{
  "name": "All India Institute of Medical Sciences Patna",
  "category": "Patna",
  "state": "Bihar",
  "description": ["B.Sc.", "MBBS", "MD", "MS", "MDS", "M.Ch.", "ANM"]
},
{
  "name": "All India Institute of Medical Sciences, Bhubaneswar",
  "category": "Bhubaneswar",
  "state": "Odisha",
  "description": ["B.Sc.", "MD", "MBBS", "MS", "MDS"]
},
{
  "name": "Alluri Sitaramaraju Academy of Medical Sciences, Eluru",
  "category": "Eluru",
  "state": "Andhra Pradesh",
  "description": ["MBBS", "B.Sc.", "MD", "MS", "PG Diploma"]
},
{
  "name": "Amala Institute of Medical Sciences, Thrissur",
  "category": "Thrissur",
  "state": "Kerala",
  "description": ["B.Sc.", "MD", "MBBS", "DM", "MS", "M.Sc.", "M.Ch."]
},
{
  "name": "Amaltas Institute of Medical Science, Dewas",
  "category": "Dewas",
  "state": "Madhya Pradesh",
  "description": ["B.Sc.", "MBBS", "GNM", "MD", "MS"]
},
{
  "name": "AMC MET Medical College, Ahmedabad",
  "category": "Ahmedabad",
  "state": "Gujarat",
  "description": ["MBBS", "MD", "B.Sc.", "MS"]
},
{
  "photo": "manipal-logo.jpg",
  "name": "Kasturba Medical College, Manipal, Manipal Academy of Higher Education",
  "category": "Manipal",
  "state": "Karnataka",
  "description": ["MBBS", "MD", "MS", "M.Ch.", "DM", "Ph.D."]
},
{
  "photo": "dy-patil-ayurved-logo.jpg",
  "name": "Dr. D.Y. Patil College of Ayurved and Research Centre",
  "category": "Pune",
  "state": "Maharashtra",
  "description": ["BAMS", "MD (Ayurveda)", "MS (Ayurveda)", "Ph.D. (Ayurveda)"]
},
{
  "photo": "soa-university-logo.jpg",
  "name": "SOA University - Siksha 'O' Anusandhan",
  "category": "Bhubaneswar",
  "state": "Odisha",
  "description": ["MBBS", "MD", "MS", "M.Ch.", "DM", "Ph.D."]
},
{
  "photo": "saveetha-medical-logo.jpg",
  "name": "Saveetha Institute of Medical and Technical Sciences, Poonamallee",
  "category": "Chennai",
  "state": "Tamil Nadu",
  "description": ["MBBS", "MD", "MS", "M.Ch.", "DM", "Ph.D."]
},
{
  "photo": "st-john-medical-logo.jpg",
  "name": "St. John’s National Academy of Health Sciences",
  "category": "Bangalore",
  "state": "Karnataka",
  "description": ["MBBS", "MD", "MS", "M.Ch.", "DM", "Ph.D."]
},
{
  "photo": "srm-medical-logo.jpg",
  "name": "SRM Institute of Science and Technology, Kattankulathur",
  "category": "Chennai",
  "state": "Tamil Nadu",
  "description": ["MBBS", "MD", "MS", "M.Ch.", "DM", "Ph.D."]
},
{
  "photo": "sri-ramachandra-logo.jpg",
  "name": "Sri Ramachandra Institute of Higher Education and Research",
  "category": "Chennai",
  "state": "Tamil Nadu",
  "description": ["MBBS", "MD", "MS", "M.Ch.", "DM", "Ph.D."]
},
]
