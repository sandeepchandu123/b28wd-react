
import './App.css';
export default function App() {
  console.log("Hi");
  // const names=["sandeep", "sandy", "sanju"]///
 const users=[
    {
    name:"sandeep",
    pic:"https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d29tYW4lMjBwcm9maWxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80 ",
  },
{name:"sandy",
pic:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoGBxARERAREBAQEBEQEA4QDhAODhAQDhAQFhIYGBYSFhYaHysiGhwoHRYWIzQjKCwuMTExGSE3PDcwOyswMS4BCwsLDw4PHBERGTAfHx8wLjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMC4wMDAwMDAwMDAwMDAwMDAwMP/AABEIAPsAyQMBIgACEQEDEQH/xAAbAAADAQEBAQEAAAAAAAAAAAABAgMABAUGB//EADwQAAIBAgQEBAMEBgsAAAAAAAABAgMRBBIhMUFRYXEFMoGRIkJSE6HB0WJyscLh8BQjM0NjgoOSorLy/8QAGgEAAgMBAQAAAAAAAAAAAAAAAgMAAQQFBv/EADERAAIBAwIDBwMDBQEAAAAAAAABAgMRIQQxEkFRImGBkaGx0RPh8AUycSNCUsHxFP/aAAwDAQACEQMRAD8A/ODWDYwR6ewLGsExZLACY1iyrChCJVqRju/TiWC2krsIDnnjuS9yTxsudvRFcSM0tXSXO53Gk0t2l6nn/wBMn9T+4SdVy8zvba5OMVLWxthM9NgODDVsl+KfC+x1wrxls/R6BppjKeojNdH0KCsLANQchWIx2IwhMhGKwsDKM0xWAIC0jPIwoZGDFMUwTFFHqmsExiPU2AAYJCCmaC9N/U8/EVnN2XlX/JkbsIrVVTXV8kPWxnCH+78jjlL1HcWZ0Lq6afNC3I5NSVSq85/OhFsFzMBZmuG5gDEIa4yYoEWiHRTxEo8brk9TppYhS6Pl+R59wpjFJodCvKPej0mTZKhiL6SfZ8ysjTGSawalNSV0IwMLFZBEwACANIRIBjGCFmAEBRR65g2MYD1YDBMQhyY+LeVcNXInGFjrrW47RVyKhGSvF3TM059pmSpQTm5c3+eRKpG0eRH7WNtUu8XuWlVdvKtHaV9rEXSXT0d0XFdTHVy7w9V8/iOebT207i2LVIITIOSMEk0xQJD5DZGGogMCiPFdLip8xk+jGwSTwCCST4WEsVSuNlGKg55IQOqlO613RNwDT0LjRlFjKc3FlWALAEkOkAUZgGWEyMAxiwAGCAFlHsGCY5560AHp6DE8Qvhn2IDLCbI1acquztGWVKOXV/NuRwtJNJ7fwOitSkqMJxk/LC6txiGjTeSLUtcsH16mFzdr35ifoJ1U3Ft2vl4ztbOLd3UP2UQwwMXtYzh/h39RJUKz2i2uWhpoNNbXDqxSeYX/AIT+AToUlprfnqQqYdLbN0b2OjI35k0+NyUouPlenFGuGVsYqsI78OPU5ZxtwApHdTqwlpJepz4qgovo9mOjHJhq0XGPHB3XsIqaYJUmuHsFdwqfU1qjEztxayskzXK2QmUY6ckLaFJuorX4/wA6lTnqRf4IyahuMcFHVcwKey7ILJFYuaGwMwDBi2YAwCAgAEBRR7JjGOYj1xjGJ4p/C19RG7JsGTsrmwmOjlanDMlP4Glr+7+0pUxCeVxVD/PGdNnDktvv9K5mm+fxGB04yd0BDV1YQ4ZWdu7Pn9jpqylvkqZddaUo1EcFfGzeiqTUetkPUenT+dEMqMGvofV3Rpoxce0kYtTUnV7MJW8fhJeYcLOo1509bfGymSp+h7ojD7WErJ2b6Jp+6KOo95QpP/Tt+w2xkr3yBTdocM7poSpg57qP3oNPFSistRZo8pcAOrG2tOl2X2i/ElOVPjTs+lR/iNTsseu3sZp8MHenKz8WvLhEqUoXvGVujuBPsHLTd7Jp8Ly0fTY59uDXqRVVDKSXi/gxVFm+PA6HI2c579zZmF/7JAWLTqIg3cIDPUrSqPJdjppeVDMjh5cPYsbKTvBBp3QABMMKMANjWIUKYawLAlWPXCZGOWj1xjmxVTXsjpPOryu2wKu1hGonwxwLKTV3fW3/AKCnz32JRNZ/iLSOW6j3OirC6ppfp39DlnV6XOuE3lTWrpyUmv0ZHBWau3G9htJ2RWrdrOPO3sl6NO56M1/V03J2ajz66L2Jzqpq3FHFDy+rFc2Gv2pC5at323SKOQk3qa4lxl8WMLd2OgvXf0YqKKAcE3hAkWrBLZNLP06EZwaAnScc8gzGAYWQxWnV4P3JmDhNwd0Q6jEadS3VFk77G2FVS2GRswgCYO4XCAAwC2Az1QmRjko9WaWz7HmuJ1Y6r/drvPtyORzt1FVHd4MOpnFu3QMYarhz/n2NUstE7k3iPyI1awKi75ME60Ip8O5SGIyu+62a+pcida19NnsRbBmHxSWTFKq5R4X/AMG5gC5X4WMhlkJMkGwUGwSRRkNmBYOUYk+RDZrBzp9UDIBoviki0CVPitV96FKUXZrur9jqr4FfLoD9NTzHD6fHwxsKcpJuKvY4QFZYea4ewn2cuT9gHRqLeL8gHjcA0Jtbeo0cNJ8LdysKKXV83t7Bwozvd9n+fjf2XeHGMnsNF3VzBYDWh3IwAgDFM9VAr1lCN+PyrqMufLc8nG4jM+m0exxbnodVXVGF+b2+fznY0J3u29WSqVCecm2UonCnWfDZBlIUxgzOEDMYsoyKImisA4lBSCkFIaxojEhkgmQR8UWkAnKaGqM0KObZN9hE7t2iWld2JJnsJ3Sf1annwwrfyyXdHoxjZJcrIunBrfmbtHGScrrArJyZRk5DljY0zJMAWZlIzMAAijELZmALFDENnV4liflW3zvm+R5kmNUncQ4iHais6s3JisA4LBGYAAmIQAUAJcdymFIpAVIeKHRVmVYokNYEQmxWCAZhbEnC5cnjBQJQOzwtebvD9458LQbnFatX13tY9SFNRVkrCed7WN+hoScvqcl8fczEY7EYaOnIRk5FWRkEZZsRgCBlozMDFGYGMSFSAxQgCEM5TBAcQjMKEJChTBMWUAKQTp8Pw+eWuy1l+QcQoQc5KMd2JGN3+B6NPw9ZdXaT+46qdOMfKsvZBHcR2qH6fCnmfafseXiMNKHVc1sSPaRz1MFB7Xj229hkJ2EV/wBOd7034M81lMLHNOKtpe77I6X4c/riXw+GUOr+oY5LkxNHQ1eNcSskVFYwGCjsMRiMdiMNCJCSIyLSIyCZkmAUZgLQhgYjGYGNQqQpjACEM53YUvOhbivcnKNjhJhShKO4ljWMG5YALGsG5rkIBI9HwitCN4vRzas3t2PPuZMNMbRqulNTXI+hMeTh/EJx8zzx4p7rsz06GIhPyu9t1s0MTud2jq6dbCw+j3+44QBDRpCYAQkUYRjMVhxAkKybKMRjEZ5k5kZFpkWEZJisAQBIzswrGEY1CpGFGFLEsrWZx1DqqI5pxPPQNWpzIkYLiAYZDGMYhDBAYhAj0qji04uzQlzXCUiJ2ye9hcQqkb7NeePBfwLHz9GtKDvF2Z6eG8SjLSXwPn8j/IdGSZ2tLrozSjUdpej+H3HYExhiOiYRjisNASFZORRk5DUZ5kpkmUmTZZinuKYIA4iWBisZiyGoTIAAgLEspNEWi8ickebidCrG7IziSlEvJE2hiZjnHJJhNJGCEmMYxCACYxCGNcICyHXgsfKGj1jy5dj16c1JKS1TPnjowOKcHzi/PHn17j4S6m7Sax03wzd4+327vI9sVhhJNJrVPVAZoidtu6FZORRk2MRnmRmTZSYjLMU9wChAMQlgYrGYrGoTIBgGLsJY8zBmjNHmUdSUckYiVVYe1hsRH4Uw75MrjeD7iWS6uQaOrBu6aFxVHKWpZsBKk3TVRbcyBgMIZmMYxiEMEBootK7sQxkzGLIel4TV1cHs9YfrHos8XDq2WS4NM9u6autpao6PA1FN80dn9Oq8VNwf9vt9mIycikhJBI0zOeYjKzJssxT3EMFgDiIYGIx2KxqFSEZggLEMtUpitF5LbclUieXizt1KaV2kSmuo8leDBNFaC0kugUnZXE04Xm49Uzz6Ummj0MbHNThLujz2rPsz1MMs1GpHl8aLq4al3itDHjjUpdYvzWf9M8mSAkPJDUY7vkNMHDd2JpGkitONk2Rkx0ocMV1YBikF8LZNFamkUgqUf3S6IpkhpLW3Y1ON2dMIJdxun00qi6LqXzEjBpI9Pw2ejjy+KP4nFPylfDZfEu0l9x0Z04xTgul/zwNOklwV42548/z0O+QkikhJGdHbmjnmTZWZJlowz3ABhAxiEMVisZgY1CZCGMYsQzsW1ic0XlsiU9vU8nDc9LUjglOJXCr8hKg9HYdJdgRTVqtzjxVK0mdfgkvPHnBk/FPMuw3gn9q/1Jf9QZvipNvoJ08Pp/qCiv8AK3mjlxEbSYFG0e7K43zsE94j6facV1MVSCjKfdj1EraRscx0YzdEDVqX/Ua6GOW5SjAMo5muQ0OHYrHb0NWnoqcLPbd+BGs2EStohkLEob6WxEGpsjYKVpx729zVNkRA1H7y+LhmpdM+R7bJyK8ETkZUejmc8ybKVCbLMM9xDMwRkTOxWKxmKxqEyFAZACEM/9k= ",

},
{
  name:"sanju",
    pic:"data:image/jpeg;base64,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 "
}];
const movies=[
  {
    name:"Jai Bhim",
    poster:"https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
    rating:9.6,
    summery:"A pregnant woman from a primitive tribal community, searches desperately for her husband, who is missing from police custody. A High Court advocate rises in support to find her husband and seek justice for them.",
  },
  {
    name:"Ala Vikuntapuramlo",
    poster:"https://upload.wikimedia.org/wikipedia/en/2/28/Ala_Vaikunthapurramuloo.jpeg",
    rating:8,
    summery:"Valmiki and Ramachandra start their career as clerks in the company of Ananth ARK Ramakrishna. Ramachandra, who marries ARK's daughter Yasoda Yasu, becomes wealthy while Valmiki remains poor. On the day of the birth of both their children, Ramachandra's son appears to be dead. When nurse Sulochana informs Valmiki about this, he pities Ramachandra and Yasu and offers to exchange his baby with the dead one. After switching them, however, the apparently dead child begins to cry. Sulochana tries to switch them back but Valmiki senses an opportunity that his son would have a better life growing up in a rich family. He prevents her from switching, pushing her accidentally off a ledge. Sulochana goes into a coma, while Valmiki gets a leg cramp that makes him limp permanently. The two boys grow-up in different ways. Raj, raised at Ramachandra's house, is timid, innocent, and soft-spoken, while Bantu, who is raised at Valmiki's house, is smart, outspoken, and hard-working. Valmiki, who favours Raj, treats Bantu with disgust due to his true parentage.",
  },
  {
    name:"Jathi Ratnalu",
    poster:"https://www.thenewsminute.com/sites/default/files/styles/slideshow_image_size/public/Jathi_Ratnalu_poster_Twitter_NaveenPolishetty_11032021_1200x800.jpg?itok=lktuEUPO",
    rating:7.6,
    summery:"Three young men leave their village to find decent jobs in the city. However, they find themselves in a pickle when a minister blackmails them for a lost mobile phone.",
  },
  {
    name:"Narappa",
    poster:"https://assets.thehansindia.com/h-upload/2021/07/20/1600x960_1089848-narappa-movie-review.jpg",
    rating:8.2,
    summery:"n Anantapur district in the 1980s, a man and a boy cross a river carrying homemade bombs. In another part of the village, a woman, a man and a girl are also hiding from the police.",
  },
  {
    name:"Vakeel Saab",
    poster:"https://i2.wp.com/www.eastmojo.com/wp-content/uploads/2021/05/Vakeel-Saab-Pawan-Kalyan-Prakash-Raj-2.jpg?resize=731%2C1024&ssl=1",
    rating:7.8,
    summery:"After being molested by Vamsi, a politician's son, Pallavi, along with her friends, is unable to lodge a complaint against him. However, an alcoholic lawyer, Satyadev, comes to their rescue.",
  },
  {
    name:"Ninnu koori",
    poster:"https://i.scdn.co/image/ab67616d0000b273515672c2e8acccfad756a627",
    rating:7.5,
    summery:"Pallavi invites Uma, her ex-boyfriend, to stay with her and her husband to convince him that she is happy in her marriage. Uma tries to create a rift between the couple, hoping to win Pallavi back.",


  },

  
];
  
  return (
    <div className="App">
      {/* {users.map((ur)=>(
         <Psg name={ur.name} pic={ur.pic}/>))} */}
         <section className="movie-list">
      
         {movies.map((mv)=> (
         <Movie name={mv.name}
          rating={mv.rating}
           summery={mv.summery}
          poster={mv.poster} />
         
    
  )
)}
</section>
</div>
  );
         }
        
function Movie({name,rating,summery,poster}){
  return (<div className="movie-container">
    <img src={poster}
     alt={name}
    className="movie-poster"
    />
    <div className="movie-speces">
    <h3 className="movie-name">{name}</h3>
    <p className="movie-rating"> ⭐{rating}</p>
    </div>
    <p className="movie-summery">{summery}</p>
  </div>
  
  
  );
  }
  



// // function Psg(props)///
// //   // const name="sandeep"
// //   console.log(props)
// //   return(
// //     <div>
// //       <h1>{props.name}😍</h1>
// //       </div>
// //   );
// // }

function Psg({name,pic}) {
  // const name="sandeep"
 
  return(
    <div>
      <img className="user-pic" src={pic} alt={name}/>
      <h1 className="user-name">{name}😍🙄🙄🙄</h1>
      </div>
  );
  }
