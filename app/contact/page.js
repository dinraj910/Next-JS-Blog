export default function ContactPage(){
    return(
        <>
            <h1 className="text-2xl font-bold">Contact Page 1</h1>
            <p className="mt-4">This is the contact page of the Next.js blog.</p>
            <p className="mt-2">Feel free to reach out with any questions or feedback!</p>
            <p className="mt-2">You can contact us at: <a href="mailto:lDg9B@example.com" className="text-blue-500 hover:underline">lDg9B@example.com</a></p>       
            <p className="mt-2">Follow us on social media for updates.</p>
            <ul className="mt-2 list-disc list-inside">
                <li><a href="https://twitter.com/dinrajkdinesh" className="text-blue-500 hover:underline">Twitter</a></li>
                <li><a href="https://github.com/dinrajkdinesh" className="text-blue-500 hover:underline">GitHub</a></li>
            </ul>
            <p className="mt-2">We look forward to hearing from you!</p>

        </>

    )
}