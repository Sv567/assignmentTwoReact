const h2 = React.createElement('h2' , {
    style:{ 

        padding:'20px 0'

    }
} , "Learn Web Development")

const p = React.createElement('p' , {} , "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia eius eum magnam libero! Aliquam, ad?");

const  para = React.createElement('p' , {} , "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia eius eum magnam libero! Aliquam, ad? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia eius eum magnam libero! Aliquam, ad?");


const  para2 = React.createElement('p' , {} , "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia eius eum magnam libero! Aliquam, ad? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia eius eum magnam libero! Aliquam, ad? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia eius eum magnam libero! Aliquam, ad?");

const div = React.createElement('div' , {
    style:{ 

        height:'100vh',
        justifyContent:'center',
        display:'flex',
        flexDirection:'column',
        padding:'0 300px',
        fontFamily:'sans-serif'

    }
} , [h2 , p , para , para2]);


ReactDOM.render(div , document.getElementById('root'));