import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useStore } from '../store';

function Detail(props) {
    const { detail, getDetail, thumb200, thumb300, back, title } = useStore();

    useEffect(() => {
        getDetail(id)
    }, [])
    let { id } = useParams()
    console.log(detail.casts);

    if (!detail.title) return;

    return (
        <div className='detailBack' style={{ background: `url(${back + detail.backdrop_path}) 0 0 /cover no-repeat` }} >
            <div className='backdrop'>

                <div className='detailVeiw'>
                    <p><img src={thumb300 + detail.poster_path} /></p>
                    <div>
                        <h2>{detail.title}</h2>

                        {
                            detail.genres.map((obj) =>
                                <span>{obj.name}</span>
                            )
                        }

                        <h4>{detail.overview}</h4>
                        <h3>Casts</h3>

                        <div className='castView'>
                            {
                                detail.casts.cast.map((obj) =>
                                    <figure>
                                        <img src={thumb200 + obj.profile_path} />
                                        <figcaption>{obj.name}</figcaption>
                                    </figure>
                                )
                            }
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default Detail;