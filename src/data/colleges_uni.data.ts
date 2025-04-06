import { Description } from '@mui/icons-material'
export type CourseData = {
  photo:string;
  name: string;
  category: string;
  state: string;
  description: string[];
};
export const coursesData: CourseData[] = [
  {
    "photo": "https://www.bits-pilani.ac.in/uploads/Goa%20Campus%20Page%20Photo.jpg",
    "name": "Birla Institute of Technology and Science, Pilani - Goa Campus",
    "category": "Goa",
    "state": "Goa",
    "description": [
      "Chemical Engineering",
      "Civil Engineering",
      "Computer Science Engineering",
      "Electrical and Electronics Engineering",
      "Mechanical Engineering"
    ]
  },
  {
    "photo": "mepco-tech-logo.jpg",
    "name": "Mepco Schlenk Engineering College",
    "category": "Virudhunagar",
    "state": "Tamil Nadu",
    "description": ["B.E. / B.Tech", "M.E. / M.Tech", "Ph.D."]
  },
  {
    "photo": "psg-tech-logo.jpg",
    "name": "PSG Institute of Technology and Applied Research",
    "category": "Coimbatore",
    "state": "Tamil Nadu",
    "description": ["B.E. / B.Tech", "M.E. / M.Tech", "Ph.D."]
  },
  {
    "photo": "bms-college-logo.jpg",
    "name": "BMS College of Engineering",
    "category": "Bangalore",
    "state": "Karnataka",
    "description": ["B.E. / B.Tech", "M.E. / M.Tech", "Ph.D."]
  },
  {
    "photo": "pes-university-logo.jpg",
    "name": "PES University",
    "category": "Bangalore",
    "state": "Karnataka",
    "description": ["B.E. / B.Tech", "M.E. / M.Tech", "Ph.D."]
  },
  {
    "photo": "https://www.iiitdmj.ac.in/assets/img/slider/slider-img1.jpg",
    "name": "Indian Institute of Information Technology Design and Manufacturing Jabalpur",
    "category": "Jabalpur",
    "state": "Madhya Pradesh",
    "description": [
      "Computer Science and Engineering",
      "Electronics and Communication Engineering",
      "Mechanical Engineering",
      "Design",
      "Smart Manufacturing"
    ]
  },
  {
    "photo": "sastra-thanjavur-logo.jpg",
    "name": "SASTRA (Deemed to be University), Thanjavur",
    "category": "Thanjavur",
    "state": "Tamil Nadu",
    "description": [
      "B.E. / B.Tech",
      "M.Sc.",
      "M.E./M.Tech",
      "B.Sc.",
      "MBA/PGDM",
      "B.Com",
      "BOPTM",
      "MCA",
      "B.Ed",
      "M.A."
    ]
  },
  {
    "photo": "soa-bhubaneswar-logo.jpg",
    "name": "SOA University - Siksha 'O' Anusandhan, Bhubaneswar",
    "category": "Bhubaneswar",
    "state": "Odisha",
    "description": [
      "B.Sc.",
      "MBA/PGDM",
      "B.E. / B.Tech",
      "M.Sc.",
      "B.Pharma",
      "MCA",
      "B.A. LL.B. (Hons)",
      "BBA",
      "BCA",
      "BDS"
    ]
  },
  {
    "photo": "ssn-chennai-logo.jpg",
    "name": "SSN College of Engineering, Chennai",
    "category": "Chennai",
    "state": "Tamil Nadu",
    "description": ["B.E. / B.Tech", "M.E./M.Tech", "MBA/PGDM"]
  },
  {
    "photo": "thapar-patiala-logo.jpg",
    "name": "Thapar University, Patiala",
    "category": "Patiala",
    "state": "Punjab",
    "description": [
      "B.E. / B.Tech",
      "MCA",
      "M.Sc.",
      "M.E./M.Tech",
      "MBA/PGDM",
      "M.A.",
      "BBA",
      "B.Sc.",
      "B.A.",
      "Ph.D."
    ]
  },
  {
    "photo": "visvesvaraya-ranga-reddy-logo.jpg",
    "name": "Visvesvaraya College of Engineering and Technology, Ranga Reddy",
    "category": "Ranga Reddy",
    "state": "Telangana",
    "description": ["B.E. / B.Tech", "MBA/PGDM", "After 10th Diploma", "M.E./M.Tech"]
  },
  {
    "photo": "vnit-nagpur-logo.jpg",
    "name": "VNIT Nagpur - Visvesvaraya National Institute of Technology",
    "category": "Nagpur",
    "state": "Maharashtra",
    "description": [
      "B.E. / B.Tech",
      "M.E./M.Tech",
      "B.Arch",
      "M.Sc.",
      "Ph.D."
    ]
  },
  {
    "photo": "warangal-institute-science-logo.jpg",
    "name": "Warangal Institute of Technology Science",
    "category": "Warangal",
    "state": "Telangana",
    "description": ["B.E. / B.Tech", "M.E./M.Tech", "After 10th Diploma"]
  },
  {
    "photo": "zakir-husain-amu-logo.jpg",
    "name": "Zakir Husain College of Engineering and Technology, Aligarh Muslim University",
    "category": "Aligarh",
    "state": "Uttar Pradesh",
    "description": [
      "B.E. / B.Tech",
      "B.Voc",
      "M.E./M.Tech",
      "B.Arch",
      "PG Diploma",
      "M.Sc.",
      "M.Plan",
      "M.Voc",
      "M.Arch"
    ]
  },
  {
    "photo": "upes-dehradun-logo.jpg",
    "name": "UPES, Dehradun",
    "category": "Dehradun",
    "state": "Uttarakhand",
    "description": [
      "B.E. / B.Tech",
      "MBA/PGDM",
      "BBA",
      "B.Sc.",
      "B.Des",
      "B.Com",
      "M.Sc.",
      "M.Des",
      "M.E./M.Tech",
      "B.A. LL.B. (Hons)"
    ]
  },
  {
    "photo": "https://home.iitd.ac.in/images/for-faculty/camp8.jpg",
    "name": "Indian Institute of Technology Delhi",
    "category": "Delhi",
    "state": "Delhi",
    "description": [
      "Computer Science",
      "Electrical Engineering",
      "Mechanical Engineering",
      "Civil Engineering",
      "Chemical Engineering"
    ]
  },
  {
    "photo": "https://acr.iitbombay.org/wp-content/uploads/2023/07/1903x789_MB-1.jpg",
    "name": "Indian Institute of Technology Bombay",
    "category": "Mumbai",
    "state": "Maharashtra",
    "description": [
      "Aerospace Engineering",
      "Biomedical Engineering",
      "Metallurgical Engineering",
      "Naval Architecture and Ocean Engineering",
      "Engineering Physics"
    ]
  },
  {
    "photo": "iit-madras.jpg",
    "name": "Indian Institute of Technology Madras",
    "category": "Chennai",
    "state": "Tamil Nadu",
    "description": [
      "Aerospace Engineering",
      "Biotechnology",
      "Engineering Design",
      "Industrial Engineering",
      "Naval Architecture and Ocean Engineering"
    ]
  },
  {
    "photo": "iit-kharagpur.jpg",
    "name": "Indian Institute of Technology Kharagpur",
    "category": "Kharagpur",
    "state": "West Bengal",
    "description": [
      "Agricultural and Food Engineering",
      "Biotechnology and Biochemical Engineering",
      "Industrial and Systems Engineering",
      "Mining Engineering",
      "Ocean Engineering and Naval Architecture"
    ]
  },
  {
    "photo": "iit-kanpur.jpg",
    "name": "Indian Institute of Technology Kanpur",
    "category": "Kanpur",
    "state": "Uttar Pradesh",
    "description": [
      "Aerospace Engineering",
      "Biological Sciences and Bioengineering",
      "Chemical Engineering",
      "Civil Engineering",
      "Computer Science and Engineering"
    ]
  },
  {
    "photo": "iit-roorkee.jpg",
    "name": "Indian Institute of Technology Roorkee",
    "category": "Roorkee",
    "state": "Uttarakhand",
    "description": [
      "Architecture and Planning",
      "Biotechnology",
      "Chemical Engineering",
      "Civil Engineering",
      "Computer Science and Engineering"
    ]
  },
  {
    "photo": "iit-guwahati.jpg",
    "name": "Indian Institute of Technology Guwahati",
    "category": "Guwahati",
    "state": "Assam",
    "description": [
      "Chemical Engineering",
      "Civil Engineering",
      "Electronics and Electrical Engineering",
      "Mechanical Engineering",
      "Design"
    ]
  },
  {
    "photo": "iit-hyderabad.jpg",
    "name": "Indian Institute of Technology Hyderabad",
    "category": "Hyderabad",
    "state": "Telangana",
    "description": [
      "Civil Engineering",
      "Computer Science and Engineering",
      "Electrical Engineering",
      "Engineering Science",
      "Mechanical Engineering"
    ]
  },
  {
    "photo": "iit-ropar.jpg",
    "name": "Indian Institute of Technology Ropar",
    "category": "Ropar",
    "state": "Punjab",
    "description": [
      "Chemical Engineering",
      "Civil Engineering",
      "Computer Science and Engineering",
      "Electrical Engineering",
      "Mechanical Engineering"
    ]
  },
  {
    "photo": "iit-indore.jpg",
    "name": "Indian Institute of Technology Indore",
    "category": "Indore",
    "state": "Madhya Pradesh",
    "description": [
      "Computer Science and Engineering",
      "Electrical Engineering",
      "Mechanical Engineering",
      "Metallurgy Engineering and Materials Science",
      "Civil Engineering"
    ]
  },
  {
    "photo": "https://www.nitt.edu/home/Library-2019.JPG",
    "name": "National Institute of Technology Tiruchirappalli",
    "category": "Tiruchirappalli",
    "state": "Tamil Nadu",
    "description": [
      "Civil Engineering",
      "Computer Science and Engineering",
      "Electrical and Electronics Engineering",
      "Mechanical Engineering",
      "Production Engineering"
    ]
  },
  {
    "photo": "https://vit.ac.in/system/files/DJI_0011.jpg",
    "name": "Vellore Institute of Technology",
    "category": "Vellore",
    "state": "Tamil Nadu",
    "description": [
      "Computer Science and Engineering",
      "Electronics and Communication Engineering",
      "Mechanical Engineering",
      "Electrical and Electronics Engineering",
      "Civil Engineering"
    ]
  },
  {
    "photo": "https://webapp.bits-pilani.ac.in/storage/uploads/2022/1661845462-630dbfd66554b.jpg",
    "name": "Birla Institute of Technology and Science, Pilani",
    "category": "Pilani",
    "state": "Rajasthan",
    "description": [
      "Chemical Engineering",
      "Civil Engineering",
      "Computer Science Engineering",
      "Electrical and Electronics Engineering",
      "Mechanical Engineering"
    ]
  },
  {
    "photo": "https://abped-college-dashboard.s3.us-east-2.amazonaws.com/tted/college-backend/college/bdc1adfc-4cd6-4f5e-be85-c770a4c496c6.jpg",
    "name": "National Institute of Technology Warangal",
    "category": "Warangal",
    "state": "Telangana",
    "description": [
      "Civil Engineering",
      "Computer Science and Engineering",
      "Electrical and Electronics Engineering",
      "Mechanical Engineering",
      "Chemical Engineering"
    ]
  },
  {
    "photo": "https://news.iitgn.ac.in/wp/wp-content/uploads/2019/07/ANK383_2224a-1280x640.jpg",
    "name": "Indian Institute of Technology Gandhinagar",
    "category": "Gandhinagar",
    "state": "Gujarat",
    "description": [
      "Chemical Engineering",
      "Civil Engineering",
      "Computer Science and Engineering",
      "Electrical Engineering",
      "Mechanical Engineering"
    ]
  },
  {
    "photo": "https://www.iitbbs.ac.in/banner/image_09062018.jpg",
    "name": "Indian Institute of Technology Bhubaneswar",
    "category": "Bhubaneswar",
    "state": "Odisha",
    "description": [
      "Civil Engineering",
      "Computer Science and Engineering",
      "Electrical Engineering",
      "Mechanical Engineering",
      "Metallurgical and Materials Engineering"
    ]
  },
  {
    "photo": "https://www.iitp.ac.in/images/photo/incubation-center-top.jpg",
    "name": "Indian Institute of Technology Patna",
    "category": "Patna",
    "state": "Bihar",
    "description": [
      "Computer Science and Engineering",
      "Electrical Engineering",
      "Mechanical Engineering",
      "Civil Engineering",
      "Chemical Science and Technology"
    ]
  },
  {
    "photo": "https://upload.wikimedia.org/wikipedia/commons/d/d2/Veermata_Jijabai_Technological_Institute_Mumbai.jpg",
    "name": "Veermata Jijabai Technological Institute",
    "category": "Mumbai",
    "state": "Maharashtra",
    "description": [
      "Civil Engineering",
      "Computer Engineering",
      "Electrical Engineering",
      "Electronics Engineering",
      "Mechanical Engineering"
    ]
  },
  {
    "photo": "https://static.toiimg.com/photo/msid-78718667/78718667.jpg?resizemode=4&width=400",
    "name": "Indian Institute of Technology Jodhpur",
    "category": "Jodhpur",
    "state": "Rajasthan",
    "description": [
      "Biosciences and Bioengineering",
      "Computer Science and Engineering",
      "Electrical Engineering",
      "Mechanical Engineering",
      "Civil Engineering"
    ]
  },
  {
    "photo": "https://i1.wp.com/iiitd.ac.in/sites/default/files/images/Seneca_Iamge_0.jpg",
    "name": "Indraprastha Institute of Information Technology Delhi",
    "category": "Delhi",
    "state": "Delhi",
    "description": [
      "Computer Science and Engineering",
      "Electronics and Communication Engineering",
      "Mathematics and Computing",
      "Computer Science and Applied Mathematics",
      "Computer Science and Artificial Intelligence"
    ]
  },
  {
    "photo": "https://www.cet.ac.in/images/slider/2019/newslider3.jpg",
    "name": "College of Engineering, Trivandrum",
    "category": "Trivandrum",
    "state": "Kerala",
    "description": [
      "Architecture",
      "Biotechnology",
      "Chemical Engineering",
      "Civil Engineering",
      "Computer Science and Engineering"
    ]
  },
  {
    "photo": "https://i.ytimg.com/vi/eQQPS-O-2mw/maxresdefault.jpg",
    "name": "Indian Institute of Technology Mandi",
    "category": "Mandi",
    "state": "Himachal Pradesh",
    "description": [
      "Civil Engineering",
      "Computer Science and Engineering",
      "Electrical Engineering",
      "Mechanical Engineering",
      "Bioengineering"
    ]
  },
  {
    "photo": "https://i1.wp.com/www.svnit.ac.in/wp-content/uploads/2018/10/banner.jpg",
    "name": "Sardar Vallabhbhai National Institute of Technology",
    "category": "Surat",
    "state": "Gujarat",
    "description": [
      "Chemical Engineering",
      "Civil Engineering",
      "Computer Engineering",
      "Electrical Engineering",
      "Mechanical Engineering"
    ]
  },
  {
    "photo": "https://stimg.cardekho.com/images/carexteriorimages/630x420/IIT_Guwahati_2020.jpg",
    "name": "Indian Institute of Technology Bhilai",
    "category": "Bhilai",
    "state": "Chhattisgarh",
    "description": [
      "Civil Engineering",
      "Computer Science and Engineering",
      "Electrical Engineering",
      "Mechanical Engineering",
      "Physics"
    ]
  },
  {
    "photo": "https://www.iitgoa.ac.in/wp-content/uploads/2020/01/Campus-1-1-845x321.jpg",
    "name": "Indian Institute of Technology Goa",
    "category": "Goa",
    "state": "Goa",
    "description": [
      "Computer Science and Engineering",
      "Electronics and Communication Engineering",
      "Electrical Engineering",
      "Mechanical Engineering",
      "Mathematics and Computing"
    ]
  },
  {
    "photo": "https://images.shiksha.com/mediadata/images/1566300340phpnQJyuI.jpeg",
    "name": "National Institute of Technology Rourkela",
    "category": "Rourkela",
    "state": "Odisha",
    "description": [
      "Biomedical Engineering",
      "Biotechnology and Medical Engineering",
      "Civil Engineering",
      "Computer Science and Engineering",
      "Electrical Engineering"
    ]
  },
  {
    "photo": "https://www.iitism.ac.in/assets/img/iitism-5.jpg",
    "name": "Indian Institute of Technology (Indian School of Mines) Dhanbad",
    "category": "Dhanbad",
    "state": "Jharkhand",
    "description": [
      "Chemical Engineering",
      "Civil Engineering",
      "Computer Science and Engineering",
      "Electrical Engineering",
      "Electronics Engineering"
    ]
  },
  {
    "photo": "https://i2.wp.com/iitpkd.ac.in/sites/default/files/banner/iitp-s.jpg?w=1140&ssl=1",
    "name": "Indian Institute of Technology Palakkad",
    "category": "Palakkad",
    "state": "Kerala",
    "description": [
      "Civil Engineering",
      "Computer Science and Engineering",
      "Electrical Engineering",
      "Mechanical Engineering",
      "Metallurgical and Materials Engineering"
    ]
  },
  {
    "photo": "https://images.static-collegedunia.com/public/college_data/images/appImage/13129_KIIT-Faculty-of-Engineering-Bhubaneswar_Campus-View.jpg",
    "name": "KIIT University, Bhubaneswar",
    "category": "Bhubaneswar",
    "state": "Odisha",
    "description": [
      "Civil Engineering",
      "Computer Science and Engineering",
      "Electrical Engineering",
      "Mechanical Engineering",
      "Electronics and Telecommunication Engineering"
    ]
  },
  {
    "photo": "https://www.nitj.ac.in/FlexyLab/UploadImage/5c8e66a4-1edf-4a98-b92d-d1101377fd07.1280X720.jpg",
    "name": "Dr. B. R. Ambedkar National Institute of Technology Jalandhar",
    "category": "Jalandhar",
    "state": "Punjab",
    "description": [
      "Biotechnology Engineering",
      "Chemical Engineering",
      "Civil Engineering",
      "Computer Science and Engineering",
      "Electronics and Communication Engineering"
    ]
  },
  {
    "photo": "https://www.nitj.ac.in/FlexyLab/UploadImage/5c8e66a4-1edf-4a98-b92d-d1101377fd07.1280X720.jpg",
    "name": "National Institute of Technology Silchar",
    "category": "Silchar",
    "state": "Assam",
    "description": [
      "Civil Engineering",
      "Computer Science and Engineering",
      "Electrical Engineering",
      "Electronics and Communication Engineering",
      "Mechanical Engineering"
    ]
  },
  {
    "photo": "https://www.iiitdmj.ac.in/assets/img/slider/slider-img1.jpg",
    "name": "Indian Institute of Information Technology Design and Manufacturing Jabalpur",
    "category": "Jabalpur",
    "state": "Madhya Pradesh",
    "description": [
      "Computer Science and Engineering",
      "Electronics and Communication Engineering",
      "Mechanical Engineering",
      "Design",
      "Smart Manufacturing"
    ]
  },
  {
    "photo": "sastra-thanjavur-logo.jpg",
    "name": "SASTRA (Deemed to be University), Thanjavur",
    "category": "Thanjavur",
    "state": "Tamil Nadu",
    "description": [
      "B.E. / B.Tech",
      "M.Sc.",
      "M.E./M.Tech",
      "B.Sc.",
      "MBA/PGDM",
      "B.Com",
      "BOPTM",
      "MCA",
      "B.Ed",
      "M.A."
    ]
  },
  {
    "photo": "soa-bhubaneswar-logo.jpg",
    "name": "SOA University - Siksha 'O' Anusandhan, Bhubaneswar",
    "category": "Bhubaneswar",
    "state": "Odisha",
    "description": [
      "B.Sc.",
      "MBA/PGDM",
      "B.E. / B.Tech",
      "M.Sc.",
      "B.Pharma",
      "MCA",
      "B.A. LL.B. (Hons)",
      "BBA",
      "BCA",
      "BDS"
    ]
  },
  {
    "photo": "ssn-chennai-logo.jpg",
    "name": "SSN College of Engineering, Chennai",
    "category": "Chennai",
    "state": "Tamil Nadu",
    "description": [
      "B.E. / B.Tech",
      "M.E./M.Tech",
      "MBA/PGDM"
    ]
  },
  {
    "photo": "thapar-patiala-logo.jpg",
    "name": "Thapar University, Patiala",
    "category": "Patiala",
    "state": "Punjab",
    "description": [
      "B.E. / B.Tech",
      "MCA",
      "M.Sc.",
      "M.E./M.Tech",
      "MBA/PGDM",
      "M.A.",
      "BBA",
      "B.Sc.",
      "B.A.",
      "Ph.D."
    ]
  },
  {
    "photo": "visvesvaraya-ranga-reddy-logo.jpg",
    "name": "Visvesvaraya College of Engineering and Technology, Ranga Reddy",
    "category": "Ranga Reddy",
    "state": "Telangana",
    "description": [
      "B.E. / B.Tech",
      "MBA/PGDM",
      "After 10th Diploma",
      "M.E./M.Tech"
    ]
  },
  {
    "photo": "vnit-nagpur-logo.jpg",
    "name": "VNIT Nagpur - Visvesvaraya National Institute of Technology",
    "category": "Nagpur",
    "state": "Maharashtra",
    "description": ["B.E. / B.Tech", "M.E./M.Tech", "B.Arch", "M.Sc.", "Ph.D."]
  },
  {
    "photo": "warangal-institute-science-logo.jpg",
    "name": "Warangal Institute of Technology Science",
    "category": "Warangal",
    "state": "Telangana",
    "description": ["B.E. / B.Tech", "M.E./M.Tech", "After 10th Diploma"]
  },
  {
    "photo": "zakir-husain-amu-logo.jpg",
    "name": "Zakir Husain College of Engineering and Technology, Aligarh Muslim University",
    "category": "Aligarh",
    "state": "Uttar Pradesh",
    "description": [
      "B.E. / B.Tech",
      "B.Voc",
      "M.E./M.Tech",
      "B.Arch",
      "PG Diploma",
      "M.Sc.",
      "M.Plan",
      "M.Voc",
      "M.Arch"
    ]
  },
  {
    "photo": "upes-dehradun-logo.jpg",
    "name": "UPES, Dehradun",
    "category": "Dehradun",
    "state": "Uttarakhand",
    "description": [
      "B.E. / B.Tech",
      "MBA/PGDM",
      "BBA",
      "B.Sc.",
      "B.Des",
      "B.Com",
      "M.Sc.",
      "M.Des",
      "M.E./M.Tech",
      "B.A. LL.B. (Hons)"
    ]
  },
  {
    "photo": "manipal-jaipur-logo.jpg",
    "name": "Manipal University, Jaipur",
    "category": "Jaipur",
    "state": "Rajasthan",
    "description": ["B.Tech", "M.Tech", "B.E.", "M.E.", "B.Sc.", "M.Sc.", "MBA", "Ph.D."]
  },
  {
    "photo": "skcet-logo.jpg",
    "name": "SKCET - Sri Krishna College of Engineering and Technology",
    "category": "Coimbatore",
    "state": "Tamil Nadu",
    "description": ["B.E. / B.Tech", "M.E. / M.Tech", "B.Sc.", "M.Sc.", "MCA", "Ph.D."]
  },
  {
    "photo": "rvc-logo.jpg",
    "name": "Ramaiah Institute of Technology",
    "category": "Bangalore",
    "state": "Karnataka",
    "description": ["B.E. / B.Tech", "M.E. / M.Tech", "B.Sc.", "M.Sc.", "MCA", "Ph.D."]
  },
  {
    "photo": "vels-logo.jpg",
    "name": "Vel Tech Rangarajan Dr. Sagunthala R and D Institute of Science and Technology",
    "category": "Chennai",
    "state": "Tamil Nadu",
    "description": ["B.E. / B.Tech", "M.E. / M.Tech", "B.Sc.", "M.Sc.", "Ph.D."]
  },
  {
    "photo": "chitkara-logo.jpg",
    "name": "Chitkara University, Chandigarh",
    "category": "Chandigarh",
    "state": "Chandigarh",
    "description": ["B.E. / B.Tech", "M.E. / M.Tech", "B.Sc.", "M.Sc.", "MBA", "Ph.D."]
  },
  {
    "photo": "rvce-logo.jpg",
    "name": "R.V. College of Engineering",
    "category": "Bangalore",
    "state": "Karnataka",
    "description": ["B.E. / B.Tech", "M.E. / M.Tech", "B.Arch", "M.Sc.", "Ph.D."]
  },
  {
    "photo": "amity-gurugram-logo.jpg",
    "name": "Amity University, Gurugram",
    "category": "Gurugram",
    "state": "Haryana",
    "description": ["B.Tech", "M.Tech", "B.Sc.", "M.Sc.", "MBA", "Ph.D."]
  },
  {
    "photo": "amity-jaipur-logo.jpg",
    "name": "Amity University, Jaipur",
    "category": "Jaipur",
    "state": "Rajasthan",
    "description": ["B.Tech", "M.Tech", "B.Sc.", "M.Sc.", "MBA", "Ph.D."]
  },
  {
    "photo": "gitam-vizag-logo.jpg",
    "name": "GITAM School of Technology, Visakhapatnam",
    "category": "Visakhapatnam",
    "state": "Andhra Pradesh",
    "description": ["B.E. / B.Tech", "M.E. / M.Tech", "B.Sc.", "M.Sc.", "Ph.D."]
  },
  {
    "photo": "vels-logo.jpg",
    "name": "VELS Institute of Science, Technology and Advanced Studies (VISTAS)",
    "category": "Chennai",
    "state": "Tamil Nadu",
    "description": ["B.E. / B.Tech", "M.E. / M.Tech", "B.Sc.", "M.Sc.", "MBA", "Ph.D."]
  },
  {
    "photo": "northcap-logo.jpg",
    "name": "The NorthCap University",
    "category": "Gurugram",
    "state": "Haryana",
    "description": ["B.E. / B.Tech", "M.E. / M.Tech", "B.Sc.", "M.Sc.", "MBA", "Ph.D."]
  },
  {
    "photo": "niet-logo.jpg",
    "name": "Noida Institute of Engineering and Technology (NIET)",
    "category": "Noida",
    "state": "Uttar Pradesh",
    "description": ["B.E. / B.Tech", "M.E. / M.Tech", "B.Sc.", "M.Sc.", "MBA", "Ph.D."]
  },
  {
    "photo": "jain-aerospace-logo.jpg",
    "name": "International Institute for Aerospace Engineering and Management, Jain Deemed-to-be University",
    "category": "Bangalore",
    "state": "Karnataka",
    "description": ["B.E. / B.Tech", "M.E. / M.Tech", "B.Sc.", "M.Sc.", "MBA", "Ph.D."]
  },
  {
    "photo": "manav-rachna-logo.jpg",
    "name": "Manav Rachna International Institute of Research & Studies",
    "category": "Faridabad",
    "state": "Haryana",
    "description": ["B.E. / B.Tech", "M.E. / M.Tech", "B.Sc.", "M.Sc.", "MBA", "Ph.D."]
  },
  {
    "photo": "christ-kengeri-logo.jpg",
    "name": "Christ - Kengeri Campus",
    "category": "Bangalore",
    "state": "Karnataka",
    "description": ["B.E. / B.Tech", "M.E. / M.Tech", "B.Sc.", "M.Sc.", "MBA", "Ph.D."]
  },
  {
    "photo": "siddaganga-tech-logo.jpg",
    "name": "Siddaganga Institute of Technology",
    "category": "Tumkur",
    "state": "Karnataka",
    "description": ["B.E. / B.Tech", "M.E. / M.Tech", "Ph.D."]
  },
  {
    "photo": "shoolini-university-logo.jpg",
    "name": "Shoolini University",
    "category": "Solan",
    "state": "Himachal Pradesh",
    "description": ["B.Tech", "M.Tech", "B.Sc.", "M.Sc.", "Ph.D."]
  },
  {
    "photo": "bs-abdur-rahman-crescent-logo.jpg",
    "name": "B.S. Abdur Rahman Crescent Institute of Science and Technology",
    "category": "Chennai",
    "state": "Tamil Nadu",
    "description": ["B.E. / B.Tech", "M.E. / M.Tech", "B.Sc.", "M.Sc.", "Ph.D."]
  },
  {
    "photo": "galgotias-logo.jpg",
    "name": "Galgotias University",
    "category": "Greater Noida",
    "state": "Uttar Pradesh",
    "description": ["B.Tech", "M.Tech", "B.Sc.", "M.Sc.", "Ph.D."]
  },
  {
    "photo": "thiagarajar-logo.jpg",
    "name": "Thiagarajar College of Engineering",
    "category": "Madurai",
    "state": "Tamil Nadu",
    "description": ["B.E. / B.Tech", "M.E. / M.Tech", "B.Sc.", "M.Sc.", "Ph.D."]
  },
  {
    "photo": "hindustan-tech-logo.jpg",
    "name": "Hindustan Institute of Technology and Science",
    "category": "Chennai",
    "state": "Tamil Nadu",
    "description": ["B.Tech", "M.Tech", "B.Sc.", "M.Sc.", "Ph.D."]
  },
  {
    "photo": "anurag-university-logo.jpg",
    "name": "Anurag University",
    "category": "Medchal",
    "state": "Telangana",
    "description": ["B.Tech", "M.Tech", "B.Sc.", "M.Sc.", "Ph.D."]
  },
  {
    "photo": "mit-wpu-logo.jpg",
    "name": "MIT-WPU",
    "category": "Pune",
    "state": "Maharashtra",
    "description": ["B.Tech", "M.Tech", "B.Sc.", "M.Sc.", "Ph.D."]
  },
  {
    "photo": "nmam-tech-logo.jpg",
    "name": "NMAM Institute of Technology",
    "category": "Udupi",
    "state": "Karnataka",
    "description": ["B.E. / B.Tech", "M.E. / M.Tech", "Ph.D."]
  },
  {
    "photo": "kpr-tech-logo.jpg",
    "name": "KPR Institute of Engineering and Technology",
    "category": "Coimbatore",
    "state": "Tamil Nadu",
    "description": ["B.E. / B.Tech", "M.E. / M.Tech", "Ph.D."]
  },
  {
    "photo": "vnr-vignana-jyothi-logo.jpg",
    "name": "VNR Vignana Jyothi Institute of Engineering and Technology",
    "category": "Hyderabad",
    "state": "Telangana",
    "description": ["B.E. / B.Tech", "M.E. / M.Tech", "B.Sc.", "M.Sc.", "Ph.D."]
  },
  {
    "photo": "kct-logo.jpg",
    "name": "Kumaraguru College of Technology",
    "category": "Coimbatore",
    "state": "Tamil Nadu",
    "description": ["B.E. / B.Tech", "M.E. / M.Tech", "Ph.D."]
  }
]
