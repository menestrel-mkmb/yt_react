import styles from "./Category.module.css"
import Card from "../Card";
import videos from "../../json/videos.json";

function Category() {

    let catVideos = {}, uniqueCat = [];
    videos.map( function (video) {
        (catVideos[video.category] === undefined) ?
            catVideos[video.category] = [video] :
            catVideos[video.category] = [...catVideos[video.category], video];

        if (!uniqueCat.includes(video.category))
            uniqueCat = [...uniqueCat, video.category];
    })

    return (
        <section className={ styles.cat__sect }>
                {
                uniqueCat.map( (cat) => {
                    return(
                        <article key={ cat }>
                            <h2 className={ styles.cat__title }>{ cat }</h2>
                            <section className={ styles.videos__sect }>
                                { catVideos[cat].map( (video) => { return <Card videoId={ video.id } key={ video.id } /> } ) }
                            </section>
                        </ article>
                    )
                })
                }
        </section>
    )
}

export default Category;