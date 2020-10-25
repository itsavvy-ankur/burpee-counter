// Import react-circular-progressbar module and styles
import {
    CircularProgressbar,
    buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import AnimatedProgressProvider from "./AnimatedProgressProvider";
// Animation
import { easeQuadInOut } from "d3-ease";



 function Bar() {
    const percentage = 70;
    return (
        

        <div className="Bar" style={{ width: 300, height: 150 }}>
            
            <table>
                
                <td>
                    <AnimatedProgressProvider
                        valueStart={0}
                        valueEnd={percentage}
                        duration={1.4}
                        easingFunction={easeQuadInOut}
                        repeat={false}
                    >
                        {value => {
                            const roundedValue = Math.round(value);
                            return (
                                <CircularProgressbar
                                    value={value}
                                    text={`${roundedValue}%`}
                                    /* This is important to include, because if you're fully managing the
                              animation yourself, you'll want to disable the CSS animation. */
                                    styles={buildStyles({ pathTransition: "none" ,textColor: "red",
                                    pathColor: "turquoise",
                                    trailColor: "gold"})}
                                />
                            );
                        }}
                    </AnimatedProgressProvider>
                </td>
            </table>





        </div>



    );
}



export default Bar;
