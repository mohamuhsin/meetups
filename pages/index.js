import MeetupList from "@/components/meetups/MeetupList";

const DUMMY_MEETUPS = [
    {
        id: "m1",
        title: "First meetup",
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbIrVIBbLadPLgwGLL7VPryCRPONecVhYDLQ&s",
        address: "Some address, 5, 12345 some city",
        description: "This is a first meetup",
    },
    {
        id: "m2",
        title: "Second meetup",
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJId3wRQvgQZlks5NL7LGzg6Y_kCo55fTbmA&s",
        address: "Some address, 10, 12345 some city",
        description: "This is a second meetup",
    },
];
export default function HomePage() {
    return <MeetupList meetups={DUMMY_MEETUPS} />;
}
