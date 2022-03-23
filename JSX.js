/**
 * JSX is basically HTML and Javascript smushed into one thing
 * To display *stuff* on webpages, we create a thing called a component
 * A component is code that can display something -- a table, a button, really anything!
 * We write code for components in functions
 * and these functions return this HTML-like code we call JSX
 */

export default function componentExample(props){
    //export allows this function to be used in other files

    //The JSX is inside this return function
    return(
        /**
         * JSX is made of "tags":
         * <div></div> is an example
         */

        <div>
            {
            /*By the way, this is how you do comments inside of a tag.
              

              Our first pair of tags in the return statment is <div></div>

              The opening tag is <div>
              And the closing tag is </div>
              For now, put tags in pairs (there *is* a way to not have to do that though)

              Pairs of tags follow this structure <tag></tag>

              The <div> tag is a special tag creates a "container" to put more tags inside. 
              
              Generally tags are what cause things to appear
            */
            }

            <p>paragraph ooh la la</p>

            {
                /**
                 * This is the <p></p>, also known as the "paragraph tag"
                 * It causes the text you put in between the tags to appear
                 * Basically, stuff you put between tags in a pair are the "input"
                 * 
                 * Note how it follows the <tag></tag> structure
                 * 
                 */
            }

            <h1>header 1</h1>
            <h2>header 2</h2>
            <h3>header 3</h3>
            <h4>header 4</h4>
            <h5>header 5</h5>

            {
                /**
                 * These tags are known as headers. 
                 * They cause text to appear just like <p>, just in different sizes
                 * <h1> is the largest, <h5> is the smallest
                 */
            }

            <img src={"./dummyImage"}/>

            {/**
             * Woah, this tag doesn't have a pair! 
             * Some tags usually don't use pairs, <img /> is one. 
             * 
             * You'd write them in this format
             * <tag/>
             * 
             * The input is formatted like this
             * <tag inputOne={"input"} inputTwo={"input"}/>
             * 
             * 
             * <img/> displays, well, an image!
             * You may ask what src is...
             * 
             * similar to how functions have arguments that you pass in,
             * tags like <img /> have arguments as well. 
             * One such argument is src, which is the filepath in the project to the image
             * 
             */
             }

            
        </div>
    )
}