import { atom } from 'recoil';

const sharedCourseAtom = atom({
  key: 'sharedCourse',
  default: null,
});

export default sharedCourseAtom;
