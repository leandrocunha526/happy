import Orphanage from "../models/Orphanage";

import imageView from "./images_view";

export default {
    render(orphanage: Orphanage){
        return{
            id: orphanage.id,
            name: orphanage.name,
            about: orphanage.about,
            latitude: orphanage.latitude,
            longitude: orphanage.longitude,
            instructions: orphanage.instructions,
            opening_hours: orphanage.opening_hours,
            open_on_weekens: orphanage.open_on_weekends,
            image: imageView.renderMany(orphanage.image),
        };
    },

    renderMany(orphanages: Orphanage[]){
        return orphanages.map((orphanage) =>
           this.render(orphanage));
    }
}