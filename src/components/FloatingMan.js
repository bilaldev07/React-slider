// Dependencies
import React from "react";
import styled, { keyframes } from "styled-components";

const float = keyframes`
  to {
    transform: translateY(5px);
  }
`;

const reflectMovement = keyframes`
  from {
    transform: scale(.975);
    transform-origin: center;
  }
  to {
    transform: scale(1);
    transform-origin: center;
  }
`;

const Man = styled.g`
  animation: ${float} ${(props) => props.speed}s ease-in-out infinite alternate;
`;

const Shadow = styled.path`
  animation: ${reflectMovement} ${(props) => props.speed}s ease-in-out infinite
    alternate;
`;

export default function FloatingMan({ speed, className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 297 207"
      className={className}
    >
      <defs>
        <path
          d="M98.402 1.668L2.97 62.707c-3.264 2.088-2.676 5.487 1.284 7.548L156.67 149.3c3.978 2.06 9.909 2.043 13.173-.054l95.432-61.038c3.265-2.088 2.676-5.487-1.284-7.548L111.576 1.615c-3.978-2.061-9.9-2.043-13.174.053z"
          id="a"
        />
      </defs>
      <Shadow
        speed={speed}
        d="M295.118 163.842c-1.525-.776-4.656 3.105-4.656 3.105l-19.568-1.061c-2.568-.268-22.6-8.69-22.6-8.69a70.126 70.126 0 0 0-10.15-4.819l17.285-11.055c3.157-2.016 2.595-5.3-1.249-7.29L107.027 57.674c-3.844-1.99-9.57-1.971-12.727.054l-92.177 58.95c-3.158 2.017-2.596 5.3 1.248 7.29l147.163 76.331c3.844 1.99 9.57 1.972 12.727-.053l32.358-20.7c8.669 5.781 24.803 10.796 29.316 12.447 5.717 2.087 20.817 8.03 22.181 9.136.892.714 3.336 2.677 5.066 4.024a4.761 4.761 0 0 0 4.005.892l7.786-1.784a7.135 7.135 0 0 0 3.826-2.32l3.407-3.997c3.354-4.845-.454-8.593-.891-7.772-.437.821-6.44 4.774-6.44 4.774L249.953 192c-7.733-1.784-18.73-8.78-18.73-8.78-6.127-7.316-18.132-12.66-20.166-13.535l12.88-8.19c5.35 2.534 11.398 4.845 16.053 5.014 10.605.375 27.132 6.817 27.132 6.817 1.783 2.909 9.16 5.3 9.16 5.3a24.75 24.75 0 0 0 3.433-.259 14.59 14.59 0 0 1 8.473-5.3 8.917 8.917 0 0 0 6.556-2.284c3.665-2.882.374-6.942.374-6.942z"
        fill="#398FCD"
        fillRule="nonzero"
      />
      <Man speed={speed} fill="none" fillRule="evenodd">
        <g transform="translate(.892)">
          <mask id="b" fill="#fff">
            <use xlinkHref="#a" />
          </mask>
          <g mask="url(#b)" fillRule="nonzero">
            <path
              fill="#34397D"
              d="M28.514 93.578l144.718-91.99-41.794-23.002-148.384 89.902z"
            />
            <path
              fill="#FF4D6F"
              d="M70.308 117.098l144.727-91.99-41.803-23.002L24.857 92.008z"
            />
            <path
              fill="#9DD3D1"
              d="M114.198 136.96l144.727-91.991-41.803-23.002-148.384 89.902z"
            />
            <path
              fill="#ffafaf"
              d="M154.948 160.479l144.728-91.99-41.803-23.003-148.375 89.903z"
            />
            <path
              d="M162.324 64.777l-24.491-6.157 24.491 6.157zm-39.582-9.726c-2.845-2.409-14.823-8.19-14.823-8.19-3.238-2.195-11.354-6.764-11.354-6.764 2.364-4.827 3.568-16.774 3.568-16.774.767-3.756-6.333-4.461-6.333-4.461-8.152-1.347-24.5 8.2-24.5 8.2l-1.766-3.685c-1.73-3.57-6.555-2.418-6.555-2.418-4.513.517-8.643 4.541-8.643 4.541-3.14 1.65-2.515 6.853-2.515 6.853l-25.927 11.75a7.474 7.474 0 0 0-2.48 1.785 3.971 3.971 0 0 0 1.187 4.078c16.384 8.922 36.683 7.753 36.683 7.753 2.194 1.526 32.884 13.92 32.884 13.92l9.81 3.015c21.04 18.8 41.117 20.914 41.117 20.914s25.428 4.158 29.575 11.778c4.148 7.62 28.603 15.168 34.33 17.229 5.725 2.06 20.816 8.03 22.18 9.136.892.714 3.336 2.677 5.066 4.024a4.761 4.761 0 0 0 4.005.893l7.786-1.785a7.135 7.135 0 0 0 3.827-2.32l3.407-3.997c3.353-4.845-.455-8.592-.892-7.771-.437.82-6.44 4.773-6.44 4.773l-13.922-2.944c-7.733-1.785-18.73-8.78-18.73-8.78-6.707-8.03-20.513-13.66-20.513-13.66-10.15-10.6-27.212-18.951-27.212-18.951l28.157 4.077s17.749 11.394 28.362 11.769c10.614.375 27.131 6.817 27.131 6.817 1.784 2.908 9.16 5.3 9.16 5.3a24.74 24.74 0 0 0 3.434-.26 14.59 14.59 0 0 1 8.473-5.3 8.917 8.917 0 0 0 6.555-2.283c3.64-2.838.357-6.897.357-6.897-1.525-.777-4.656 3.105-4.656 3.105l-19.568-1.062c-2.568-.268-22.6-8.69-22.6-8.69-8.482-5.23-27.578-10.823-27.578-10.823-4.914-3.864-33.963-13.598-33.963-13.598L122.742 55.05zm-81.777-9.984l8.98-5.46c2.15-.408 4.367-.3 6.467.312 0 0 .892 1.58 4.593 1.32 0 0 3.167 1.633 3.497 3.801.044-.009-13.263.268-23.537.027zm37.343-2.98l-3.487-3.9c.82-2.515-1.98-6.459-1.98-6.459s10.703-2.962 12.094-3.185a38.964 38.964 0 0 1-4.388 11.18l-2.239 2.364z"
              fill="#312782"
              opacity=".61"
              style={{ mixBlendMode: "multiply" }}
            />
          </g>
        </g>
        <path
          d="M169.727 58.683l-24.473-6.166 24.473 6.166zm-39.564-9.735c-2.845-2.4-14.86-8.181-14.86-8.181-3.237-2.195-11.353-6.764-11.353-6.764 2.364-4.827 3.568-16.774 3.568-16.774.767-3.756-6.333-4.461-6.333-4.461-8.17-1.392-24.482 8.155-24.482 8.155l-1.784-3.65c-1.73-3.568-6.555-2.417-6.555-2.417-4.513.517-8.643 4.541-8.643 4.541-3.14 1.651-2.515 6.853-2.515 6.853L31.314 38.01a7.474 7.474 0 0 0-2.48 1.784 3.971 3.971 0 0 0 1.178 4.086c16.384 8.923 36.684 7.754 36.684 7.754C68.89 53.16 99.58 65.553 99.58 65.553l9.81 3.016c21.04 18.8 41.117 20.914 41.117 20.914s25.428 4.158 29.575 11.777c4.147 7.62 28.603 15.169 34.329 17.23 5.726 2.06 20.817 8.03 22.181 9.136.892.714 3.336 2.677 5.066 4.024a4.761 4.761 0 0 0 4.005.892l7.786-1.784a7.135 7.135 0 0 0 3.826-2.32l3.407-3.997c3.354-4.845-.455-8.592-.892-7.772-.437.821-6.44 4.774-6.44 4.774l-13.922-2.944c-7.732-1.785-18.73-8.78-18.73-8.78-6.706-8.03-20.513-13.66-20.513-13.66-10.123-10.609-27.158-18.96-27.158-18.96l28.121 4.095s17.74 11.394 28.345 11.769c10.604.374 27.131 6.816 27.131 6.816 1.784 2.91 9.16 5.3 9.16 5.3a24.74 24.74 0 0 0 3.434-.258 14.59 14.59 0 0 1 8.473-5.3 8.917 8.917 0 0 0 6.555-2.285c3.639-2.837.357-6.897.357-6.897-1.525-.776-4.656 3.105-4.656 3.105l-19.568-1.061c-2.569-.268-22.6-8.69-22.6-8.69-8.483-5.23-27.578-10.824-27.578-10.824-4.914-3.863-33.963-13.597-33.963-13.597l-46.075-10.324zm-81.778-9.984l9.017-5.46a13.87 13.87 0 0 1 6.466.312s.892 1.58 4.594 1.32c0 0 3.166 1.633 3.496 3.801.009 0-13.298.268-23.573.027zm37.344-2.98l-3.488-3.863c.82-2.516-1.98-6.46-1.98-6.46s10.703-2.962 12.094-3.185a38.964 38.964 0 0 1-4.388 11.18l-2.238 2.328z"
          fill="#F9D7BC"
          fillRule="nonzero"
        />
        <path
          d="M107.509 67.864s2.782 8.833 14.127 13.928c11.345 5.094 24.973 8.03 29.433 8.101 0 0-4.87-6.638-.384-12.295s8.232-7.673 8.232-7.673l3.443 2.587s-.5-2.284 5.476-7.967c0 0 5.084-5.97 9.08-5.175L132.16 48.725s-9.972 1-24.652 19.139z"
          fill="#363251"
          fillRule="nonzero"
        />
        <path
          d="M68.462 35.136a12.277 12.277 0 0 0 11.71-1.026l-8.214 4.836-3.496-3.81zm-1.757 16.489S46.19 53 30.02 43.872c0 0-3.737-3.864 1.293-5.871l35.39 13.624z"
          fill="#D4C2AE"
          fillRule="nonzero"
        />
        <path
          d="M67.57 33.905l-3.425-7.004a4.007 4.007 0 0 1 1.703-5.29l7.608-4.078 3.149 3.337-1.686-3.668c-1.73-3.569-6.555-2.418-6.555-2.418-4.513.518-8.643 4.542-8.643 4.542-3.14 1.65-2.515 6.852-2.515 6.852"
          fill="#102E47"
          fillRule="nonzero"
        />
        <path
          d="M92.355 22.449l11.327-3.016S92.454 32.121 85.73 35.984c0 0 3.38-2.74 6.626-13.535zm57.189 57.014l35.675 14.392s-.205 6.665 10.774 10.537l39.663 18.282 17.704-1.231 6.44-4.774s1.034 1.901-4.746 7.486l-.41 6.246-7.768 1.972a6.42 6.42 0 0 1-5.503-.946l-7.314-5.237s-42.302-14.348-52.354-22.306c-10.051-7.96-9.061-8.03-9.061-8.03l-21.584-5.979s-3.818-5.638-1.516-10.412zm109.47 18.684l25.223-.937s-1.56 2.498-6.555 2.284l-7.528 5.353a7.24 7.24 0 0 1-8.098.206l-7.715-4.926-14.975-5.906s-20.514.57-38.227-13.054L173.027 77.1l-10.703-4.587s.964-5.353 7.59-10.126l34.909 12.49s1.784 7.433 8.321 8.326l45.87 14.945z"
          fill="#D4C2AE"
          fillRule="nonzero"
        />
        <path
          d="M162.324 72.512l-15.251-11.385 22.815 1.205s-6.413 5.22-7.564 10.18zm-49.526-10.278l36.656 17.175s-2.417 3.828 1.588 10.502c0 0-33.687-2.677-43.533-22.03 0-.017 4.29-5.504 5.289-5.647z"
          fill="#29273F"
          fillRule="nonzero"
        />
        <path
          d="M66.767 51.572a412.207 412.207 0 0 0 41.232 17.452l4.46-6.835-22.45-11.519s-7.768 5.622-23.242.902zm13.405-17.471l5.557 1.883"
          fill="#D4C2AE"
          fillRule="nonzero"
        />
      </Man>
    </svg>
  );
}

// WEBPACK FOOTER //
// ./src/components/FloatingMan.js
