// export : 내보내기 (getType 함수를 내보내기)

export default function getType(data) {
    return Object.prototype.toString.call(data).slice(8, -1)
}