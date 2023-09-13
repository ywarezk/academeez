/**
 * Component for main navigation
 *
 * Created August 14th, 2023
 * @author ywarezk
 * @version 0.3.0
 * @license MIT
 */

import type {FC} from 'react';
import {cn} from '@/lib';
import Link from 'next/link';

export const Nav: FC = () => {
  return (
    <nav className={cn('border-b')}>
      <div className={cn('flex px-4 py-3 justify-between items-center mx-auto')}>
        <div>
          <Link href="/" data-test="az-logo">
            <svg
              className={cn('h-7 w-auto')}
              width="309"
              height="43"
              viewBox="0 0 309 43"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M40.4516 14.2956C42.9736 16.0856 44.2347 19.0402 44.2347 23.1698V41.2686H36.6105V36.7302C35.2025 38.3793 33.5041 39.647 31.5083 40.5334C29.516 41.4164 27.4997 41.8596 25.4698 41.8596C22.9273 41.8596 20.8085 41.1415 19.1066 39.7089C17.4048 38.2762 16.5573 36.2011 16.5573 33.4904C16.5573 30.9377 17.2031 29 18.4915 27.6842C19.7833 26.3684 21.3074 25.5129 23.064 25.1212C24.8239 24.7296 27.0896 24.4135 29.868 24.1764C32.2909 23.9806 34.0201 23.7332 35.059 23.4412C36.0944 23.1457 36.6139 22.5067 36.6139 21.5241C36.6139 19.9128 36.115 18.7928 35.1171 18.1641C34.1192 17.5354 32.9197 17.2193 31.5117 17.2193C30.0662 17.2193 28.6958 17.5629 27.4075 18.25C26.1191 18.9371 25.2955 20.3045 24.9435 22.3487L17.7294 20.7511C18.1976 17.6075 19.732 15.2988 22.3326 13.8249C24.9333 12.351 27.8756 11.6124 31.1597 11.6124C34.8334 11.6124 37.9296 12.5091 40.4516 14.2956ZM25.5006 36.4038C26.3788 37.1321 27.4826 37.4929 28.8154 37.4929C30.0662 37.4929 31.2862 37.1184 32.4789 36.3729C33.6715 35.6273 34.6591 34.4661 35.4417 32.896C36.2243 31.326 36.6139 29.378 36.6139 27.0589V26.5882C36.1047 26.9421 35.4691 27.1963 34.707 27.3544C33.9449 27.5124 32.9573 27.6705 31.7441 27.8251C30.1038 28.0209 28.7812 28.2683 27.7868 28.5603C26.7889 28.8557 25.938 29.3848 25.2374 30.151C24.5334 30.9171 24.1814 32.0268 24.1814 33.4835C24.178 34.7066 24.6189 35.6789 25.5006 36.4038Z"
                fill="#2D2D2D"
              />
              <path
                d="M54.6132 26.5298C54.6132 29.8315 55.3274 32.2089 56.7525 33.6622C58.1775 35.1154 60.0058 35.8438 62.234 35.8438C64.1477 35.8438 65.7334 35.4109 66.9841 34.5451C68.2349 33.6828 69.2123 32.2261 69.9163 30.1819L76.1906 33.2465C75.097 36.1152 73.3166 38.2281 70.8526 39.5852C68.3887 40.9423 65.5352 41.6191 62.2921 41.6191C59.6333 41.6191 57.1421 41.0488 54.8148 39.9081C52.4876 38.7675 50.6012 37.06 49.1556 34.7788C47.7101 32.5009 46.9856 29.749 46.9856 26.5264C46.9856 23.3038 47.7101 20.5519 49.1556 18.274C50.6012 15.9962 52.4876 14.2853 54.8148 13.1447C57.1386 12.004 59.6333 11.4337 62.2921 11.4337C65.5352 11.4337 68.3921 12.1105 70.8526 13.4676C73.3166 14.8247 75.0936 16.9376 76.1906 19.8063L69.9163 22.8709C69.2123 20.8267 68.2349 19.3734 66.9841 18.5077C65.7334 17.6453 64.1477 17.209 62.234 17.209C60.0058 17.209 58.1775 17.9374 56.7525 19.3906C55.3274 20.8508 54.6132 23.2282 54.6132 26.5298Z"
                fill="#2D2D2D"
              />
              <path
                d="M102.672 14.2956C105.194 16.0856 106.455 19.0402 106.455 23.1698V41.2686H98.8308V36.7302C97.4228 38.3793 95.7244 39.647 93.7286 40.5334C91.7363 41.4164 89.7201 41.8596 87.6901 41.8596C85.1476 41.8596 83.0288 41.1415 81.327 39.7089C79.6251 38.2762 78.7776 36.2011 78.7776 33.4904C78.7776 30.9377 79.4235 29 80.7118 27.6842C82.0036 26.3684 83.5278 25.5129 85.2843 25.1212C87.0442 24.7296 89.31 24.4135 92.0883 24.1764C94.5112 23.9806 96.2404 23.7332 97.2793 23.4412C98.3148 23.1458 98.8342 22.5067 98.8342 21.5241C98.8342 19.9128 98.3353 18.7928 97.3374 18.1641C96.3395 17.5354 95.14 17.2193 93.7321 17.2193C92.2865 17.2193 90.9161 17.5629 89.6278 18.25C88.3394 18.9371 87.5158 20.3045 87.1638 22.3487L79.9497 20.758C80.4179 17.6144 81.9523 15.3057 84.553 13.8318C87.1536 12.3579 90.096 11.6193 93.3801 11.6193C97.0503 11.6124 100.15 12.5091 102.672 14.2956ZM87.7175 36.4038C88.5957 37.1322 89.6996 37.4929 91.0323 37.4929C92.2831 37.4929 93.5031 37.1184 94.6958 36.3729C95.8884 35.6274 96.8761 34.4661 97.6586 32.896C98.4412 31.326 98.8308 29.378 98.8308 27.0589V26.5882C98.3216 26.9421 97.686 27.1963 96.9239 27.3544C96.1618 27.5124 95.1742 27.6705 93.961 27.8251C92.3207 28.0209 90.9982 28.2683 90.0037 28.5603C89.0058 28.8557 88.1549 29.3848 87.4543 30.151C86.7503 30.9171 86.3984 32.0268 86.3984 33.4835C86.3984 34.7066 86.8358 35.6789 87.7175 36.4038Z"
                fill="#2D2D2D"
              />
              <path
                d="M140.642 41.2686H133.018V36.847C131.925 38.4205 130.506 39.6092 128.767 40.4132C127.028 41.2205 125.083 41.6225 122.934 41.6225C120.275 41.6225 117.91 41.0316 115.839 39.8532C113.765 38.6747 112.145 36.9466 110.973 34.6654C109.801 32.3876 109.213 29.6734 109.213 26.5298C109.213 23.3862 109.801 20.6755 110.973 18.3943C112.145 16.1165 113.768 14.3849 115.839 13.2065C117.91 12.0281 120.275 11.4372 122.934 11.4372C125.083 11.4372 127.028 11.8391 128.767 12.6465C130.506 13.4539 131.925 14.6426 133.018 16.2127V0H140.642V41.2686ZM130.527 33.6931C132.188 32.2604 133.018 29.8727 133.018 26.5298C133.018 23.2282 132.188 20.8508 130.527 19.3975C128.866 17.9442 126.823 17.2159 124.4 17.2159C122.13 17.2159 120.306 17.9923 118.918 19.5452C117.531 21.0981 116.837 23.4275 116.837 26.5298C116.837 29.6356 117.531 31.965 118.918 33.5145C120.306 35.0673 122.134 35.8438 124.4 35.8438C126.819 35.8438 128.863 35.1292 130.527 33.6931Z"
                fill="#2D2D2D"
              />
              <path
                d="M173.128 28.8867H151.489C151.8 31.2435 152.593 32.9338 153.864 33.9576C155.136 34.9814 156.612 35.4899 158.293 35.4899C162.124 35.4899 164.882 33.8202 166.563 30.4774L172.486 32.9544C171.351 35.7064 169.584 37.8399 167.178 39.3516C164.773 40.8667 161.834 41.6225 158.351 41.6225C155.73 41.6225 153.307 41.0522 151.079 39.9116C148.851 38.7709 147.064 37.0737 145.714 34.8131C144.364 32.5525 143.691 29.7937 143.691 26.5298C143.691 23.2694 144.364 20.5072 145.714 18.2466C147.064 15.9859 148.851 14.2887 151.079 13.1481C153.307 12.0075 155.73 11.4372 158.351 11.4372C161.01 11.4372 163.474 11.9972 165.74 13.1172C168.005 14.2372 169.834 15.9378 171.221 18.2156C172.609 20.4969 173.302 23.266 173.302 26.5298C173.306 27.3166 173.244 28.1033 173.128 28.8867ZM154.158 18.9543C152.928 19.9163 152.077 21.4005 151.609 23.4069H165.33C164.899 21.4005 164.031 19.9197 162.719 18.9543C161.41 17.9923 159.934 17.5113 158.29 17.5113C156.769 17.5079 155.389 17.9923 154.158 18.9543Z"
                fill="#2D2D2D"
              />
              <path
                d="M217.489 14.9759C218.682 17.4117 219.277 20.6343 219.277 24.6437V41.2686H211.652V24.6437C211.652 21.7372 211.427 19.6036 210.979 18.2466C210.528 16.8895 209.544 16.2127 208.016 16.2127C206.414 16.2127 204.947 17.1746 203.618 19.102C202.289 21.0294 201.622 24.9391 201.622 30.8347V41.2686H194.005V24.6437C194.005 21.7372 193.779 19.6036 193.332 18.2466C192.881 16.8895 191.897 16.2127 190.369 16.2127C188.766 16.2127 187.3 17.1746 185.971 19.102C184.641 21.0294 183.978 24.9391 183.978 30.8347V41.2686H176.354V11.791H183.978V16.862C185.855 13.1687 188.708 11.3204 192.539 11.3204C195.04 11.3204 196.958 11.9285 198.287 13.1481C199.616 14.3678 200.536 16.0168 201.045 18.0988C201.985 15.821 203.225 14.1204 204.77 13.0004C206.314 11.8804 208.122 11.3204 210.193 11.3204C213.863 11.3204 216.297 12.5366 217.489 14.9759Z"
                fill="#2D2D2D"
              />
              <path
                d="M251.297 28.8867H229.659C229.97 31.2435 230.762 32.9338 232.034 33.9576C233.305 34.9814 234.781 35.4899 236.463 35.4899C240.293 35.4899 243.051 33.8202 244.733 30.4774L250.655 32.9544C249.52 35.7064 247.754 37.8399 245.348 39.3516C242.942 40.8667 240.003 41.6225 236.521 41.6225C233.9 41.6225 231.477 41.0522 229.248 39.9116C227.02 38.7709 225.233 37.0737 223.883 34.8131C222.533 32.5525 221.86 29.7937 221.86 26.5298C221.86 23.2694 222.533 20.5072 223.883 18.2466C225.233 15.9859 227.02 14.2887 229.248 13.1481C231.477 12.0075 233.9 11.4372 236.521 11.4372C239.179 11.4372 241.643 11.9972 243.909 13.1172C246.175 14.2372 248.003 15.9378 249.391 18.2156C250.778 20.4969 251.472 23.266 251.472 26.5298C251.472 27.3166 251.414 28.1033 251.297 28.8867ZM232.328 18.9543C231.097 19.9163 230.246 21.4005 229.778 23.4069H243.499C243.068 21.4005 242.2 19.9197 240.888 18.9543C239.579 17.9923 238.103 17.5113 236.459 17.5113C234.935 17.5079 233.558 17.9923 232.328 18.9543Z"
                fill="#2D2D2D"
              />
              <path
                d="M282.905 28.8867H261.266C261.577 31.2435 262.37 32.9338 263.641 33.9576C264.912 34.9814 266.389 35.4899 268.07 35.4899C271.901 35.4899 274.659 33.8202 276.34 30.4774L282.262 32.9544C281.128 35.7064 279.361 37.8399 276.955 39.3516C274.549 40.8667 271.61 41.6225 268.128 41.6225C265.507 41.6225 263.084 41.0522 260.856 39.9116C258.628 38.7709 256.84 37.0737 255.491 34.8131C254.141 32.5525 253.468 29.7937 253.468 26.5298C253.468 23.2694 254.141 20.5072 255.491 18.2466C256.84 15.9859 258.628 14.2887 260.856 13.1481C263.084 12.0075 265.507 11.4372 268.128 11.4372C270.787 11.4372 273.251 11.9972 275.516 13.1172C277.782 14.2372 279.61 15.9378 280.998 18.2156C282.385 20.4969 283.079 23.266 283.079 26.5298C283.083 27.3166 283.021 28.1033 282.905 28.8867ZM263.935 18.9543C262.705 19.9163 261.854 21.4005 261.386 23.4069H275.106C274.676 21.4005 273.808 19.9197 272.496 18.9543C271.187 17.9923 269.71 17.5113 268.067 17.5113C266.546 17.5079 265.165 17.9923 263.935 18.9543Z"
                fill="#2D2D2D"
              />
              <path
                d="M309 41.2686H284.077V34.844L300.262 18.2191H284.545V11.7945H308.822V18.2191L292.638 34.844H309V41.2686Z"
                fill="#2D2D2D"
              />
              <path d="M0 42.4814H11.0211L28.5625 0.401962H17.5414L0 42.4814Z" fill="#01D662" />
            </svg>
          </Link>
        </div>
        <div className={cn('h-auto flex grow justify-end')}>
          {/* link to github */}
          <a target="_blank" data-test="github-link" href="https://github.com/ywarezk/academeez">
            <svg
              className={cn('hover:fill-green-400 h-6 w-auto')}
              height="32"
              aria-hidden="true"
              viewBox="0 0 16 16"
              version="1.1"
              width="32"
              data-view-component="true"
            >
              <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
            </svg>
          </a>

          {/* link to youtube with svg icon */}
          <a
            data-test="youtube-link"
            target="_blank"
            className={cn('mx-6 hover:fill-green-400 fill-black group')}
            href="https://www.youtube.com/channel/UCmnTSM4hGDJin7g5PyXa9pQ"
          >
            <svg
              className={cn('h-6 w-auto group-hover:fill-green-400')}
              width="32"
              height="32"
              viewBox="0 0 20 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className={cn(' fill-black group-hover:fill-green-400')}
                d="M19.5879 2.19117C19.3575 1.33435 18.6819 0.658937 17.8252 0.428223C16.2602 0 9.99977 0 9.99977 0C9.99977 0 3.73963 0 2.17456 0.411988C1.33435 0.642457 0.642335 1.33448 0.411866 2.19117C0 3.75611 0 7.0016 0 7.0016C0 7.0016 0 10.2634 0.411866 11.812C0.642579 12.6687 1.31787 13.3441 2.17469 13.5749C3.75611 14.0032 10 14.0032 10 14.0032C10 14.0032 16.2602 14.0032 17.8252 13.5912C18.682 13.3606 19.3575 12.6852 19.5882 11.8285C19.9999 10.2634 19.9999 7.01808 19.9999 7.01808C19.9999 7.01808 20.0164 3.75611 19.5879 2.19117ZM8.00661 9.9999V4.0033L13.2124 7.0016L8.00661 9.9999Z"
              />
            </svg>
          </a>

          <a
            target="_blank"
            data-test="twitter-link"
            href="https://twitter.com/academeez"
            className={cn('hover:fill-green-400')}
          >
            <svg
              className={cn('h-6 w-auto hover:fill-green-400')}
              fill="#000000"
              height="800px"
              width="800px"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 310 310"
            >
              <g id="XMLID_826_">
                <path
                  id="XMLID_827_"
                  d="M302.973,57.388c-4.87,2.16-9.877,3.983-14.993,5.463c6.057-6.85,10.675-14.91,13.494-23.73
		c0.632-1.977-0.023-4.141-1.648-5.434c-1.623-1.294-3.878-1.449-5.665-0.39c-10.865,6.444-22.587,11.075-34.878,13.783
		c-12.381-12.098-29.197-18.983-46.581-18.983c-36.695,0-66.549,29.853-66.549,66.547c0,2.89,0.183,5.764,0.545,8.598
		C101.163,99.244,58.83,76.863,29.76,41.204c-1.036-1.271-2.632-1.956-4.266-1.825c-1.635,0.128-3.104,1.05-3.93,2.467
		c-5.896,10.117-9.013,21.688-9.013,33.461c0,16.035,5.725,31.249,15.838,43.137c-3.075-1.065-6.059-2.396-8.907-3.977
		c-1.529-0.851-3.395-0.838-4.914,0.033c-1.52,0.871-2.473,2.473-2.513,4.224c-0.007,0.295-0.007,0.59-0.007,0.889
		c0,23.935,12.882,45.484,32.577,57.229c-1.692-0.169-3.383-0.414-5.063-0.735c-1.732-0.331-3.513,0.276-4.681,1.597
		c-1.17,1.32-1.557,3.16-1.018,4.84c7.29,22.76,26.059,39.501,48.749,44.605c-18.819,11.787-40.34,17.961-62.932,17.961
		c-4.714,0-9.455-0.277-14.095-0.826c-2.305-0.274-4.509,1.087-5.294,3.279c-0.785,2.193,0.047,4.638,2.008,5.895
		c29.023,18.609,62.582,28.445,97.047,28.445c67.754,0,110.139-31.95,133.764-58.753c29.46-33.421,46.356-77.658,46.356-121.367
		c0-1.826-0.028-3.67-0.084-5.508c11.623-8.757,21.63-19.355,29.773-31.536c1.237-1.85,1.103-4.295-0.33-5.998
		C307.394,57.037,305.009,56.486,302.973,57.388z"
                />
              </g>
            </svg>
          </a>
        </div>
      </div>
    </nav>
  );
};
