import { LOAD_SCHOOLS, DELETE_SCHOOL, CREATE_SCHOOL, UPDATE_SCHOOL } from './actionTypes';
import { LOAD_STUDENTS, DELETE_STUDENT, CREATE_STUDENT, UPDATE_STUDENT } from './actionTypes';

/*SCHOOLS*/
export const schoolsReducer = (schools=[], action)=> {
  switch(action.type) {
  case LOAD_SCHOOLS:
    return action.payload;
  case DELETE_SCHOOL:
    return schools.filter( school => school.id !== action.payload.id );
  case CREATE_SCHOOL:
    return [action.payload, ...schools];
  case UPDATE_SCHOOL:
    return schools.map( school => school.id === action.payload.id ? action.payload : school );
  default:
    return schools;
  }
};

/*STUDENTS*/
export const studentsReducer = (students=[], action)=> {
  switch(action.type) {
  case LOAD_STUDENTS:
    return action.payload;
  case DELETE_STUDENT:
    return students.filter( student => student.id !== action.payload.id );
  case CREATE_STUDENT:
    return [action.payload, ...students];
  case UPDATE_STUDENT:
    return students.map( student => student.id === action.payload.id ? action.payload : student );
  case DELETE_SCHOOL:
    return students.map( student => student.schoolId === action.payload.id ? {...student, schoolId: null} : student );
  default:
    return students;
  }
};
