const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
//const session = require('express-session');

mongoose.connect('mongodb://localhost/Rchatbot', {useNewUrlParser: true});
var app = express();
app.use(express.static(__dirname+'/views/'));
app.use(bodyParser.urlencoded({extended: true}));
const userSchema = new mongoose.Schema({
  item: String,
});

const UserList = mongoose.model('UserList', userSchema);

const cSchema = new mongoose.Schema({
  citem:String,
});
const Cl = mongoose.model('Cl', cSchema);

const qSchema = new mongoose.Schema({
  qitem:String,
  aitem:String,
});
const Ql = mongoose.model('Ql', qSchema);
const Ql1 = mongoose.model('Ql1',qSchema);
const Ql2 = mongoose.model('Ql2',qSchema);
const Ql3 = mongoose.model('Ql3',qSchema);
const Ql4 = mongoose.model('Ql4',qSchema);
const Ql5 = mongoose.model('Ql5',qSchema);

const lSchema = new mongoose.Schema({
  id:String,
  date:Date,
});
const logList = mongoose.model('logList',lSchema);
app.listen(3000,function(req,res){console.log('server running on 3000');});
app.set('view engine','ejs');
app.get('/' ,function(req,res){
  UserList.find({}, function(err, items){
    Cl.find({}, function(err, categories){
      Ql.find({}, function(err, questions){
        Ql1.find({}, function(err, questions1){
          Ql2.find({}, function(err, questions2){
            Ql3.find({}, function(err, questions3){
              Ql4.find({}, function(err, questions4){
                Ql5.find({}, function(err, questions5){
    if(items.length == 0){
      UserList.insertMany([
        {item: 'Student'},
        {item: 'Parent'},
        {item: 'Faculty'},
        {item: 'Casual'},
        ]);

        Cl.insertMany([
          {citem: 'Admission'},
          {citem: 'Clubs'},
          {citem: 'Hostels'},
          {citem: 'Infrastructure'},
          {citem: 'Alumni and Achievements'},
          {citem: 'Syllabus and Exams'},
          {citem: 'Back'},
          ]);

          Ql.insertMany([
            {qitem: 'Courses in RIT', aitem:'http://msrit.edu/admissions.html#po'},
            {qitem: 'Eligibility for B.E through CET and ComedK', aitem:'https://msrit-bucket.s3.us-west-2.amazonaws.com/Admissions/CHECK+LIST+2021.pdf'},
            {qitem: 'Scholarships', aitem:'https://msrit-bucket.s3-us-west-2.amazonaws.com/Admissions/scholarship-2021.pdf'},
            {qitem: 'Placements', aitem:'http://msrit.edu/placement.html'},
            {qitem:'Prerequisites for Management admission', aitem:'https://msrit-bucket.s3-us-west-2.amazonaws.com/Admissions/1st+Year+B.E+%26+B.ARCH+Fees+Structure+2020+-+2021+(COMEDK+%26+MANAGEMENT+QUOTA).pdf'},
            {qitem:'Prerequisites for NRI admission', aitem:'https://msrit-bucket.s3-us-west-2.amazonaws.com/Admissions/MSRIT_International_Forum.pdf'},
            {qitem:'Prerequisites for B.Arch and M.Arch', aitem:'https://msrit-bucket.s3-us-west-2.amazonaws.com/Admissions/1st+Year+B.E+%26+B.ARCH+Fees+Structure+2020+-+2021+CET+(Regular).pdf'},
            {qitem: 'PhD and PG courses' ,aitem : 'https://msrit-bucket.s3.us-west-2.amazonaws.com/Admissions/PG+ELIGIBILITY+2021.jpg'},
            {qitem: 'Fees structures', aitem: 'http://msrit.edu/admissions.html#po - scroll to the Fee Structure section to find the necessary information. '},
            ]);

            Ql1.insertMany([
              {qitem: 'Extra-curricular clubs', aitem:'There is a Department of Extra curricular activities called DECA with many dance and art clubs. http://msrit.edu/support/deca.html - for further information.'},
              {qitem: 'Sports clubs', aitem:'Ramaiahs sports club is a very diverse sports team involving both indoor and outdoor sports. http://msrit.edu/support/sports.html - for further information.'},
              {qitem: 'Technical teams', aitem:'Every department in RIT have dedicated technical clubs from aeromodelling team to a satellite team'},
              {qitem: 'IEEE', aitem:'The IEEE-RIT Student Branch was inaugurated in RIT in November 2003. The branch endeavors to enrich the students of RIT with the latest developments in various fields of technology and research and ensure that their competency levels meet all the required standards in today’s industry and participation in a kaleidoscope of technical events throughout the year, implicitly emphasizing on extra-curricular activities in a student’s life. http://msrit.edu/support/cocurricular.html - for further information'},
              {qitem: 'NSS', aitem:'National Service Scheme, popularly known as NSS, was launched in 1969 under the Ministry of Youth Affairs & Sports Govt. of India in 37 Universities involving 40,000 students with primary focus on the development of personality of students through community service. This scheme requires full participation and involvement of the volunteers for a mandatory period of two years. http://msrit.edu/support/nss.html - for further information'},
              {qitem: 'NCC', aitem:'National Cadet Corps (NCC) is engaged in grooming the youth into disciplined and patriotic citizen. The NCC programme of the college plays an important role in installing discipline as well as preparing students for productive citizenship'},
              {qitem: 'Fests', aitem:'From the main cultural fest Udhbhav to IEEE technical fests, RIT has many fests happening throughout an academic year'},
              ]);

              Ql2.insertMany([
                {qitem: 'Location of college hostels', aitem:'https://msrit-bucket.s3-us-west-2.amazonaws.com/Uploads/hostel_2019_info.pdf'},
                {qitem: 'Amenities, Fees, Services', aitem:'http://msrit.edu/facilities/hostel.html'},
                ]);

                Ql3.insertMany([
                  {qitem: 'Labs', aitem:'All departments have state-of-the-art laboratories to conduct experiments.'},
                  {qitem: 'Parking lots', aitem:'The institute has spacious parking facility which can accommodate 1720 two wheelers and 100 four wheelers. Multi level, wide and sufficient parking places are provided separately for staff and students. 24 x 7 security and CCTV cameras are also installed for all parking places.'},

                  {qitem: 'Canteens', aitem:'MSRIT has two food courts providing ample choice to students. The two full fledged canteens provide hygienic and sumptuous meals both in north Indian and south Indian styles. Quick snacks and fresh fruit juice counters are also available in the canteens.'},
                  {qitem: 'Seminar Halls and Auditoriums', aitem:'The following is the list of auditoriums with seating capacities:Apex Block Auditorium: 1000 Seating Capacity. ESB Seminar hall 1: 315 Seating Capacity. ESB Seminar hall 2: 140 Seating Capacity. DES Hi-Tech Seminar hall: 200 Seating Capacity. LHC Seminar Hall 1: 115 Seating Capacity. LHC Seminar Hall 2: 115 Seating Capacity'},

                  {qitem: 'Library', aitem:'http://www.msrit.edu/facilities/library.html'},
                  ]);

                  Ql4.insertMany([
                    {qitem: 'Notable Alumni', aitem:'http://msrit.edu/support/alumni.html'},
                    {qitem: 'Number of publications per year', aitem:'We have an average of 350 Publications per year. We have an average of 96% Placement Percentage'},
                    {qitem: 'Centers of Excellence', aitem:'https://msrit-bucket.s3-us-west-2.amazonaws.com/R%26D/Center+of+Excellence.pdf'},
                    {qitem: 'Incubation centers', aitem:'Ramaiah Institute of Management supports startups through its Innovation and Incubation Centre. It enables creation of entrepreneurs who create and deliver value. The centre nurtures ideas, mentors them to develop feasible business proposals, provid'},
                    {qitem: 'Sports achievemnets', aitem:'http://msrit.edu/support/sports.html'},
                    {qitem: 'International exposure', aitem:'RIT encourages students to attend International conferences and competitions representing the college'},
                    ]);

                    Ql5.insertMany([
                      {qitem: 'Syllabus', aitem:'https://sites.google.com/a/msrit.edu/deptcse/home'},
                      {qitem: 'Recorded lectures', aitem:'https://a.impartus.com/login/#/'},
                      {qitem: 'Previous years question papers', aitem:'http://msrit.edu/facilities/library.html - has to be accessed within college premises.'},
                      {qitem: 'SEE Exam fees', aitem:'https://careerbook.federalbank.co.in/payment/StudentSearch/MSEF'},
                      ]);

    res.render('india', {items:items,categories:categories,questions:questions,questions1:questions1,questions2:questions2,questions3:questions3,questions4:questions4,questions5:questions5});
    return;
  }
  else{
    res.render('india',{items:items,categories:categories,questions:questions,questions1:questions1,questions2:questions2,questions3:questions3,questions4:questions4,questions5:questions5});
  }

});
});
});
});
});
});
});
});
});

app.post('/', function(req,res){
  var id = req.body.id;
  var dt = new Date();
  new logList({
    id:id,
    date:dt,
  }).save();
});
//var router = express.Router();
//var users = require('./users');
//var admins = require('./admins');

//app.use('/user', users)
//app.use('/admin', admins)


//app.use(session({secret: "Shh, its a secret!"}));

//var expressLayouts = require('express-ejs-layouts');
