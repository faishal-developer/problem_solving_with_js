const s = "ADOBECODEBANC";
const t = "ABCC";

const windowString = (s, t) => {
    const sMapping = {}, sLen = s.length, tLen = t.length, tMapping = {};
    for (let i = 0; i < tLen; i++) {
        if (tMapping[t[i]]) {
            tMapping[t[i]] += 1;
        } else {
            tMapping[t[i]] = 1;
        }
    }

    let total = 0, l = 0, r = 0, min = 9999999;
    while (true) {
        if (r === sLen) {
            break;
        }
        let c = s[r];
        if (tMapping[c]) {
            if (sMapping[c]) {
                if (tMapping[c] > sMapping[c]) {
                    total = total + 1
                }
                sMapping[c] = sMapping[c] + 1;
            } else {
                total = total + 1;
                sMapping[c] = 1;
            }
        }

        // console.log("wlorking", l, r, total)
        if (total === tLen) {
            // console.log("wlorking", l, r, total)
            console.log("-------", l, r, total,min)
            if ((r - l) < min) {
                min = r - l;
            }
            while (true) {
                if (total < tLen || r<=l) {

                    break;
                }
                let c = s[l];
                if (tMapping[c]) {
                    sMapping[c] = sMapping[c] - 1;
                    if (tMapping[c] > sMapping[c]) {
                        console.log("wlorking2", l, r, total,min)
                        l = l + 1;
                        total = total - 1;
                        break;
                    }
                }
                if(tLen===total){
                    console.log("kdjfdkfk")
                    min=Math.min(r-l,min);
                }
                l = l + 1;
                console.log("wlorking3", l, r, total,min,tLen)
            }
        } 
            r = r + 1
        

    }

    return min;
}

console.log(windowString(s, t))