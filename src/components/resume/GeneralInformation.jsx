export default function GeneralInformation({name, email, phoneNumber}){
    return(
        <section>
        <h1>{name}</h1>
        <p>Email : {email}</p>
        <p>Pnone Number : {phoneNumber}</p>
        </section>
    );
}