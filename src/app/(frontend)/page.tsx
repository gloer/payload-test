import Image from 'next/image'
import { getPayload } from 'payload'
import config from '@/payload.config'
import './styles.css'
import type { Add } from '@/payload-types';


function isAdd(add: unknown): add is Add {
  return typeof add === "object" && add !== null && "id" in add;
}

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
              typeof add !== "object" || add === null ? null : (
                <a
                  href="test.html"
                  key={add.id}
                  style={{
                    backgroundImage:
                      typeof add.photo === "object" &&
                      add.photo !== null &&
                      "url" in add.photo
                        ? `url(${add.photo.url})`
                        : "",
                  }}
                >
                  <h1>{add.title}</h1>
                  <h2>Kun kr. {add.price}</h2>
                </a>
              )
            ))
          }
        </div>
      </section>
    </main>
  );
  
}
