import React from 'react'
import Event from './Event'

const Activities = () => {
  return (
    <div>
        <table>
            <tbody>
            <tr>
                <Event event='Running' img = 'https://www.shape.com/thmb/XhaeY6hfYXOUEmpvxZKjOi_-H5A=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/running-longer-or-faster-31e97070bda14ffc8afdea52094504c7.jpg' />
                <Event event ='Swimming' img = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/40._Schwimmzonen-_und_Mastersmeeting_Enns_2017_100m_Brust_Herren_USC_Traun-9897.jpg/640px-40._Schwimmzonen-_und_Mastersmeeting_Enns_2017_100m_Brust_Herren_USC_Traun-9897.jpg' />
                <Event event ='Cycling' img = 'https://allianceurology.com/wp-content/uploads/2020/11/image1.jpg' />
                <Event event ='Tennis' img = 'https://www.usatoday.com/gcdn/authoring/authoring-images/2024/07/08/USAT/74331585007-usatsi-23413759.jpg?crop=3764,2822,x666,y0' />
            </tr>
            <tr>
                <Event event ='Football' img = 'https://upload.wikimedia.org/wikipedia/commons/1/1f/ARG_Line-up_-_ARG_vs_MEX_for_2022_FIFA_WC.jpg' />
                <Event event ='Basketball' img = 'https://cdn.vox-cdn.com/thumbor/i68TkqWwk_6HTU2Hv67nVj96IM8=/0x0:6789x4526/1200x800/filters:focal(2900x20:3986x1106)/cdn.vox-cdn.com/uploads/chorus_image/image/73492755/2164077239.0.jpg' />
                <Event event ='Golf' img = 'https://media.npr.org/assets/img/2023/03/01/gettyimages-1410422468_wide-ad11c06ff7e7050f21102fe2ad74ae50acedc6f2.jpg?s=1100&c=50&f=jpeg' /> 
                <Event event ='Volleyball' img = 'https://img.olympics.com/images/image/private/t_s_pog_staticContent_hero_lg_2x/f_auto/v1536936974/primary/exvzqcvorticinejmmel' />
            </tr>
            <tr>
                <Event event ='Rugby' img = 'https://www.usatoday.com/gcdn/authoring/authoring-images/2024/07/24/USAT/74526372007-2162671238.jpg?crop=3790,2132,x0,y126' />
                <Event event ='Baseball' img = 'https://static01.nyt.com/images/2020/08/24/sports/24mlb-kepner-1/merlin_176084667_69b1099b-0b7e-41ce-bfdf-e407899f10dc-articleLarge.jpg?quality=75&auto=webp&disable=upscale' />
                <Event event ='Hockey' img = 'https://cdn.britannica.com/50/219150-050-0032E44D/Marc-Andre-Fleury-Vegas-Golden-Knights-Stanley-Cup-Final-2018.jpg' />
                <Event event ='Cricket' img = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Muralitharan_bowling_to_Adam_Gilchrist.jpg/800px-Muralitharan_bowling_to_Adam_Gilchrist.jpg' />
            </tr>
            
            </tbody>
        </table>
    </div>
  )
}

export default Activities