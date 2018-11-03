import myfunc, {myvar} from 'examplepackage';
import reactSlick from 'react-slick';

console.log("#####myfunc####", myfunc);
console.log("#####myvar####", myvar);
console.log("#####reactSlick####", reactSlick);

function mylib() {
    console.log("mylib");
}
export let  BUNDLE="BBBUNNNN";
export default mylib;