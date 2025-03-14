function sol(){
    let color_fondo_actual = getComputedStyle(document.documentElement).getPropertyValue("--fondo-color");
    color_fondo_actual = color_fondo_actual === "white"?"black":"white";
    document.documentElement.style.setProperty("--fondo-color", color_fondo_actual);

    let color_fondo1= getComputedStyle(document.documentElement).getPropertyValue("--fondo-color1");
    color_fondo1= color_fondo1 === "#9acef4"?"#29314a":"#9acef4";
    document.documentElement.style.setProperty("--fondo-color1", color_fondo1);

    let deg1= getComputedStyle(document.documentElement).getPropertyValue("--deg-uno");
    deg1= deg1 === "#E1BEE7"?"#29314a":"#E1BEE7";
    document.documentElement.style.setProperty("--deg-uno", deg1);

}