var scrollPadding = 50;
var entryPadding = 30;

let sidebarEntries = ['#sidebar-about-me', '#sidebar-contact', '#sidebar-resumes', '#sidebar-portfolio', '#sidebar-education', '#sidebar-skills'];
let anchorEntries = ['#anchor-about-me', '#anchor-contact', '#anchor-resumes', '#anchor-portfolio', '#anchor-education', '#anchor-skills'];

// Apply positions to side bar elements based on anchor positions.
$( document ).ready(function() {
    for(let step = 0; step < sidebarEntries.length; step++)
    {
        $(sidebarEntries[step]).css("top", $(anchorEntries[step]).offset().top);
    }
    
    scrollFunction();
});

// Update positions on resizing window.
window.addEventListener('resize', scrollFunction);

// Set side bar elements to be fixed when passing anchor positions.
$(window).scroll(function(){
    scrollFunction();
});

function scrollFunction()
{
    for(let step = 0; step < sidebarEntries.length; step++)
    {
        var scrollTargetTop = determineScrollOffset(step, true);
        var scrollTargetBottom = determineScrollOffset(step, false)
        
        if($(window).scrollTop() + scrollTargetTop > $(anchorEntries[step]).offset().top)
        {            
            $(sidebarEntries[step]).addClass('sidebar-entry-scrolling-1');
            $(sidebarEntries[step]).css("top", scrollTargetTop);
            //$(sidebarEntries[step]).css("background-color", "rgba(255,0,0,255)");
        }
        else if($(window).scrollTop() + $(window).height() - scrollTargetBottom < $(anchorEntries[step]).offset().top)
        {
            
            $(sidebarEntries[step]).addClass('sidebar-entry-scrolling-1');
            $(sidebarEntries[step]).css("top", $(window).height() - scrollTargetBottom);
            //$(sidebarEntries[step]).css("background-color", "rgba(0,255,0,1)");
        }
        else
        {
            $(sidebarEntries[step]).removeClass('sidebar-entry-scrolling-1');
            $(sidebarEntries[step]).css("top", $(anchorEntries[step]).offset().top);
            //$(sidebarEntries[step]).css("background-color", "rgba(0,0,255,1)");
        }
    }
}

function determineScrollOffset(step, fromTheTop)
{
    if(fromTheTop)
    {
        return (step * entryPadding) + scrollPadding;
    }
    else
    {
        return (anchorEntries.length - step) * entryPadding + scrollPadding;
    }
}