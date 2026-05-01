import Header from "./Header";
import Card from "./Card";
const Home = ()=> {
    return(
   
            <>
                  <Header/>
       <section className="w-full bg-slate-800" style={{ minHeight: "calc(100vh - 64px)" }}>
   
        <div className="container mx-auto px-4 max-w-6xl justify-center grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-y-2 gap-x-2 pt-5">
                     <Card/>
                     <Card/>
                     <Card/>
                     <Card/>
                     <Card/>
                     <Card/>
        </div>
        </section>
       
       </>
   
   
      
    )
}

export default Home;