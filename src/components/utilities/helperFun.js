
export const findBookById = (lists, id) => {
    if (lists.length > 0) {
        return lists.find(list =>
            list.volume.some(vol =>
                vol.id === id))
            .volume.find(
                vol => vol.id === id)
    }
}

export const applyPrecentage = function (num, typeName) {
    let percentage;
    switch (typeName) {
        case "Paperback":
            percentage = 0;
            break;
        case "Hardcover":
            percentage = 20;
            break;
        case "EPub":
            percentage = -10;
            break;
        case "PDF":
            percentage = -20;
            break;
        default:
            break;
    }
    const n = parseFloat(num);
    return (n + n * percentage / 100).toFixed(2);
}

export const popModal = function (n) {
    switch (n.toString()) {
        case "1":
            document.querySelectorAll(".modal")[0].style.display = "block";
            break;
        case "2":
            document.querySelectorAll(".modal")[1].style.display = "block";
            break;
        case "3":
            document.querySelectorAll(".modal")[2].style.display = "block";
            break;
        default:
            break;
    }


}

export const ratingStars = function (rating) {
    const leftStar = <svg className="description__rating__star left" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.81978 16L10.0002 13.267V0L6.90998 5.26681L0 6.11161L5.00009 10.211L3.81978 16Z" />
    </svg>

    const rightStar = <svg className="description__rating__star right" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.18047 16L5.91278e-05 13.267V0L3.09026 5.26681L10.0002 6.11161L5.00015 10.211L6.18047 16Z" />
    </svg>

    const emptyLeftStar = <svg className="description__rating__star empty" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.81978 16L10.0002 13.267V0L6.90998 5.26681L0 6.11161L5.00009 10.211L3.81978 16Z" />
    </svg>

    const emptyRightStar = <svg className="description__rating__star empty" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.18047 16L5.91278e-05 13.267V0L3.09026 5.26681L10.0002 6.11161L5.00015 10.211L6.18047 16Z" />
    </svg>

    let left = true;
    let stars = [];
    let i = 0;
    if (rating > 0) {
        for (i = 0; i < rating; i += 0.5) {
            stars.push(left ? leftStar : rightStar)
            left = !left;
        }
    }
    for (i; i < 5; i += 0.5) {
        stars.push(left ? emptyLeftStar : emptyRightStar)
        left = !left;
    }

    return stars;
}

export const formatTitle = function (title, n) {
    const length = title.length;
    return length > n
        ? `${title.substring(0, n)}...`
        : title
}


export const customScrollbar = function (el) {
    const parent = el.parentNode;
    parent.style.position = "relative";

    const elProps = [
        { "scrollbar-width": 'none' },
        { "-ms-overflow-style": 'none' },
        { "overflow-y": 'scroll' }
    ];
    let elPos = offset(el);
    let styleTag = document.createElement('style');
    styleTag.innerHTML = '.hiddenScrollbar::-webkit-scrollbar { display: none;}';//adding browser support to hide the default scrollbar
    document.querySelector('head').appendChild(styleTag);
    el.classList.add('hiddenScrollbar');
    for (let prop of elProps) {
        el.style[Object.keys(prop)[0]] = Object.values(prop)[0];
    }
    //////////
    //////////Creating the scrollbar
    let scrollbar = document.createElement('div');
    let scrollThumb = document.createElement('div');
    let scrollbarStyle = `position: absolute; top: ${elPos.top}px;`;
    let scrollThumbStyle = `position: absolute; top: 0px; left: 0px;`;
    scrollbar.classList.add('customScrollbar');
    scrollThumb.classList.add('customScrollThumb');
    scrollbar.style = scrollbarStyle;
    scrollbar.style.height = el.clientHeight + 'px';
    scrollThumb.style = scrollThumbStyle;
    let heightRatio;
    // scrollThumb.style.height = heightRatio + '%';
    /* 
    */
    //moving the scrollbar
    el.addEventListener('scroll', () => {
        // heightRatio = el.clientHeight * 100 / el.scrollHeight;
        // scrollThumb.style.height = heightRatio + '%';
        let scrollRatio = el.scrollTop * 100 / el.scrollHeight;
        scrollThumb.style.top = scrollRatio + '%';
    })
    scrollbar.appendChild(scrollThumb);
    // if (el.offsetHeight < el.scrollHeight) {
    //     el.style.position = "relative";
    //     parent.appendChild(scrollbar);
    //     isAppended = true;
    // }

    //// observing resizes to change scrollbar dimensions adequately
    const observer = new ResizeObserver(entries => {
        for (const entry of entries) {
            const isAppended = parent.querySelector(".customScrollbar");
            console.log("resized", el.clientHeight, el.scrollHeight);
            heightRatio = el.clientHeight * 100 / el.scrollHeight;
            scrollbar.style.height = el.clientHeight + 'px';
            console.log(scrollbar);

            if (el.offsetHeight < el.scrollHeight) {
                if (isAppended) {
                    parent.querySelector(".customScrollThumb").style.height = heightRatio + '%';
                }
                else {
                    console.log("appending scrollbar");
                    el.style.position = "relative";
                    parent.appendChild(scrollbar);
                    el.classList.add("scrollable");
                }
            }
            else if (isAppended) {
                console.log("removing scrollbar");
                parent.removeChild(isAppended);
                el.classList.remove("scrollable");
            }
        }

    })
    observer.observe(el);
}
function offset(el) {
    // var rect = el.getBoundingClientRect(),
    //     scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    //     scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    // return { top: rect.top + scrollTop, left: rect.left + scrollLeft }

    return { top: el.offsetTop, left: el.offsetLeft }
}