const FeedBackNotification = ({ status }: { status: string | null }) => {
  return <p className="mt-1 text-sm">{status}</p>;
};

export default FeedBackNotification;
