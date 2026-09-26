function Food(){
    const food = "Orange";
    const food2 = "Apple";
    return(
        <ul>
            <li>Banana</li>
            <li>{food}</li>
            <li>{food2.toUpperCase()}</li>
        </ul>


    ); 
}
export default Food