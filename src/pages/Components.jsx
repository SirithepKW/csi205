import RadixCounter from "../components/radixcounter";
import Value from "../components/value";
import Adder from "../components/Adder";
import Temperatures from "../components/Temperature";
import Timer from "../components/timer";

const Components = () => {
    return (  <>
        <RadixCounter/>
        <Value initial={10.254} name={"abc"} type={"interger"}/>
        <Value initial={0} name={"def"} type={"real"}/>
        <Value/>
        <Adder name={"ADDDERR"}/>
        <Temperatures/>
        <Timer/>


    </>);
}
 
export default Components;