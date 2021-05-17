let username = 'Jack'
let hasLoggedIn: boolean = true
let muMumber: number = 5

// hasLoggedIn += ' Herring'

let myRegex: RegExp = /foo/

const names: string[] = username.split(' ')

names.push('s')

const names2: Array<string> = ["q"]

interface person {
first: string,
last: string,
cool?: boolean
}

const john: person= {
first: 'John',
last: 'Malcovic',

}

const ids: Record<number,string> = {
  10: "a",
  20: "b"
}


ids[30] = 'c'

if (ids[30] === 'd'){
  console.log('its D')
}

for (let i = 0 ; i <10 ;i++){
  console.log(i)
}

[1,2,3].forEach(v=>console.log(v))