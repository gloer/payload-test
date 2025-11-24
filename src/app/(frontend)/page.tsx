import Image from 'next/image'
import { getPayload } from 'payload'
import config from '@/payload.config'
import './styles.css'

export default async function HomePage() {
  const payload = await getPayload({config});
  const queryResult = await payload.find({
    collection: "adds",
  });

  const numAdds = queryResult.totalDocs;
  const adds = queryResult.docs;
  console.log(config);

  return (
    <main>      
      <section className="snappy">
        <div 
          className="articles"
          style={{
                  gridTemplateColumns: `repeat(${numAdds}, 1fr)`,
                  width: `${numAdds * 100}%`,
                }}        
        >        
          {
            adds.map(add => (
              <a
                href="test.html"
                key={add.id}   
                style={{
                  backgroundImage: `url(${add.photo.url})`,
                }}             
              >
                <h1>{add.title}</h1>
                <h2>Kun kr. {add.price}</h2>
              </a>
            ))
          }
        </div>
      </section>
    </main>
  );
  
}
