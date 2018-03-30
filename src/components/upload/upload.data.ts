export const styleStr = `
.img-thumbnail-image {
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
}

.span,
.span_large {
    vertical-align: middle;
    margin-right: 200px;
}

.typing_loader {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    -webkit-animation: typing 1s linear infinite alternate;
    -moz-animation: Typing 1s linear infinite alternate;
    -ms-animation: Typing 1s linear infinite alternate;
    animation: typing 1s linear infinite alternate;
    margin: auto auto;
    margin-top: 48%;
    position: relative;
    left: -12px;
}

.ts-plus-dom{
    border-style:dashed;
    background-size: 50%;
    background-repeat: no-repeat;
    background-position: center;
}

@-webkit-keyframes typing {
    0% {
        background-color: rgba(0, 0, 0, 1);
        box-shadow: 12px 0px 0px 0px rgba(0, 0, 0, 0.2), 24px 0px 0px 0px rgba(0, 0, 0, 0.2);
    }
    25% {
        background-color: rgba(0, 0, 0, 0.4);
        box-shadow: 12px 0px 0px 0px rgba(0, 0, 0, 1), 24px 0px 0px 0px rgba(0, 0, 0, 0.2);
    }
    75% {
        background-color: rgba(0, 0, 0, 0.4);
        box-shadow: 12px 0px 0px 0px rgba(0, 0, 0, 0.2), 24px 0px 0px 0px rgba(0, 0, 0, 1);
    }
}

@-moz-keyframes typing {
    0% {
        background-color: rgba(0, 0, 0, 1);
        box-shadow: 12px 0px 0px 0px rgba(0, 0, 0, 0.2), 24px 0px 0px 0px rgba(0, 0, 0, 0.2);
    }
    25% {
        background-color: rgba(0, 0, 0, 0.4);
        box-shadow: 12px 0px 0px 0px rgba(0, 0, 0, 1), 24px 0px 0px 0px rgba(0, 0, 0, 0.2);
    }
    75% {
        background-color: rgba(0, 0, 0, 0.4);
        box-shadow: 12px 0px 0px 0px rgba(0, 0, 0, 0.2), 24px 0px 0px 0px rgba(0, 0, 0, 1);
    }
}

@keyframes typing {
    0% {
        background-color: rgba(0, 0, 0, 1);
        box-shadow: 12px 0px 0px 0px rgba(0, 0, 0, 0.2), 24px 0px 0px 0px rgba(0, 0, 0, 0.2);
    }
    25% {
        background-color: rgba(0, 0, 0, 0.4);
        box-shadow: 12px 0px 0px 0px rgba(0, 0, 0, 1), 24px 0px 0px 0px rgba(0, 0, 0, 0.2);
    }
    75% {
        background-color: rgba(0, 0, 0, 0.4);
        box-shadow: 12px 0px 0px 0px rgba(0, 0, 0, 0.2), 24px 0px 0px 0px rgba(0, 0, 0, 1);
    }
}`;

export const plusSvgData =
    'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmc'
    + 'gUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEv'
    + 'RFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTIyMzE2NzE2MDY0IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iM'
    + 'CAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9Ij'
    + 'IxNjMiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjI'
    + 'wMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNTExLjkxNDY2NyA5'
    + 'NjBhMjEuMzMzMzMzIDIxLjMzMzMzMyAwIDAgMS0yMS4zMzMzMzQtMjEuMzMzMzMzbDAuMTI4LTg1My4zMzMzMzRhMjEuM'
    + 'zMzMzMzIDIxLjMzMzMzMyAwIDEgMSA0Mi42NjY2NjcgMGwtMC4xMjggODUzLjMzMzMzNGEyMS4zMzMzMzMgMjEuMzMzMzM'
    + 'zIDAgMCAxLTIxLjMzMzMzMyAyMS4zMzMzMzN6IiBwLWlkPSIyMTY0IiBmaWxsPSIjZGJkYmRiIj48L3BhdGg+PHBhdGggZ'
    + 'D0iTTkzOC42NjY2NjcgNTMzLjMxMkg4NS4zMzMzMzNhMjEuMzMzMzMzIDIxLjMzMzMzMyAwIDEgMSAwLTQyLjY2NjY2N2g'
    + '4NTMuMzMzMzM0YTIxLjMzMzMzMyAyMS4zMzMzMzMgMCAxIDEgMCA0Mi42NjY2Njd6IiBwLWlkPSIyMTY1IiBmaWxsPSIjZ'
    + 'GJkYmRiIj48L3BhdGg+PC9zdmc+';
