export function createImageItemMurkup(supportList) {
  let num = 0;
  const markup = supportList
    .map(({ title, url, img1, img2, width, height }) => {
      return `<div class="swiper-slide">
      <a
        class="support__link"
        href="${url}"
        target="_blank"
        target="_blank"
        rel="noopener noreferrer nofollow"
      >
        <span class="support__number">0${(num += 1)}</span>
        
        <picture>
              <source
                  srcset="
                  ${img1} 1x,
                  ${img2} 2x"
                  type="image/png"
              >
              <img
              class="support__img" 
              width="${width}" 
              height="${height}"
                  src="${img1}"
                  alt="${title}">
          </picture> 
      </a>
    </div>`;
    })
    .join('');

  return markup;
}

// export function createImageItemMurkup(supportList) {
//   let num = 0;
//   const markup = supportList
//     .map(({ title, url, img, width, height }) => {
//       return `<div class="swiper-slide">
//       <a
//         class="support__link"
//         href="${url}"
//         target="_blank"
//         target="_blank"
//         rel="noopener noreferrer nofollow"
//       >
//         <span class="support__number">0${(num += 1)}</span>
//         <img
//           class="support__img"
//           style="width: ${width}px !important; height: ${height}px !important"
//           src="${img}"
//           alt="${title}"
//         />
//       </a>
//     </div>`;
//     })
//     .join('');

//   return markup;
// }
