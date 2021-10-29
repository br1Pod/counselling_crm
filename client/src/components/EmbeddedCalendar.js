import React from 'react';

const EmbeddedCalendar = ({ 
publicUrl = `https://calendar.google.com/calendar/embed?src=q1t3bjid1fr55siv0muevd5ctg%40group.calendar.google.com&ctz=Europe%2FLondon`,
width = `100%`,
height = `500px`
}) => { 
    
    return ( 
        <>
        <iframe src={publicUrl} style={{borderWidth:0, resize: "both", overflowX: "scroll"}}
            width={width} height={height}
            frameBorder="0" scrolling="no">
        </iframe>
        </>
    )

};



export default EmbeddedCalendar;