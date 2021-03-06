const conn = require('./conn');

const faker = require('faker');

const School = require('./School');
const Student = require('./Student');

Student.belongsTo(School);
School.hasMany(Student);

const syncAndSeed = async ()=> {
  await conn.sync({ force: true });
  const zi = await Student.create({ firstName: 'Zijian', lastName: 'Yan', gpa: 4, imageUrl: 'http://source.unsplash.com/random?animal' });
  const [ stu01, stu02, stu03, stu04, stu05, stu06, stu07, stu08, stu09, stu10, stu11, stu12 ] = await Promise.all([
    Student.createRandom(),
    Student.createRandom(),
    Student.createRandom(),
    Student.createRandom(),
    Student.createRandom(),
    Student.createRandom(),
    Student.createRandom(),
    Student.createRandom(),
    Student.createRandom(),
    Student.createRandom(),
    Student.createRandom(),
    Student.createRandom(),
    Student.createRandom(),
    Student.createRandom(),
    Student.createRandom(),
    Student.createRandom(),
    Student.createRandom(),
    Student.createRandom(),
    
  ]);
  const fullstack = await School.create({ name: 'Fullstack Academy', address: '5 Hanover Square, New York, NY', imageUrl: 'https://images.unsplash.com/photo-1499566727020-881da110a0b0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a4418b9d763f12cab34f582d564c32f2&auto=format&fit=crop&w=1113&q=80' });
  const [ sch01, sch02, sch03, sch04, sch05 ] = await Promise.all([
    School.createRandom(),
    School.createRandom(),
    School.createRandom(),
    School.createRandom(),
    School.createRandom(),
    School.createRandom(),
    School.createRandom(),
  ]);
  await zi.setSchool(fullstack);
  await Promise.all([
    stu01.setSchool(sch01),
    stu02.setSchool(sch02),
    stu03.setSchool(sch05),
    stu04.setSchool(sch03),
    stu05.setSchool(sch02),
    stu06.setSchool(sch04),
    stu07.setSchool(sch03),
    stu08.setSchool(sch04),
    stu09.setSchool(sch05),
    stu10.setSchool(sch05),
    stu11.setSchool(sch04),
    stu12.setSchool(sch02)
  ]);
};

const syncAndSeedTest = async ()=> {
  await conn.sync({ force: true });
  const [ sch01, sch02, sch03 ] = await Promise.all([
    School.create({
      name: 'NYU',
      address: '12345 Broadway, New York, NY 12345',
      description: faker.lorem.paragraphs(3)
    }),
    School.create({
      name: 'USC',
      address: '12345 Pacific Hwy, Los Angeles, CA 12345',
      description: faker.lorem.paragraphs(3)
    }),
    School.create({
      name: 'BU',
      address: '12345 Main St, Boston, MA 12345',
      description: faker.lorem.paragraphs(3)
    })
  ]);
  const [ stu01, stu02, stu03, stu04, stu05 ] = await Promise.all([
    Student.create({ firstName: 'Jane', lastName: 'Jackson', gpa: 4 }),
    Student.create({ firstName: 'Avery', lastName: 'Alvarez', gpa: 3 }),
    Student.create({ firstName: 'Sam', lastName: 'Smith', gpa: 4 }),
    Student.create({ firstName: 'Leo', lastName: 'Lee', gpa: 2 }),
    Student.create({ firstName: 'Nadia', lastName: 'Newson', gpa: 3 })
  ]);
  await Promise.all([
    stu01.setSchool(sch01),
    stu02.setSchool(sch02),
    stu03.setSchool(sch03),
    stu04.setSchool(sch01)
  ]);
};

module.exports = {
  syncAndSeed,
  syncAndSeedTest,
  models: {
    Student,
    School
  }
};