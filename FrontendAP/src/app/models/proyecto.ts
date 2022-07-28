export class proyectos { 
    idProyecto?: number;
    nombreProyecto: String;
    desProyecto: String;
    anioProyecto: String;
    imagenProyecto: String;
    

    constructor(nombreProyecto: String, desProyecto: String, anioProyecto: String, imagenProyecto: String){
        this.nombreProyecto = nombreProyecto;
        this.desProyecto = desProyecto;
        this.anioProyecto = anioProyecto;
        this.imagenProyecto = imagenProyecto;
    }


}