
export default async function FetchCar(skip:number, limit:number){
    const res = await fetch(`https://car-nextjs-api.cheatdev.online/cars?skip=${skip}&limit=${limit}`);

    const data = await res.json();
    return data;
}