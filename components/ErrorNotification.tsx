const ErrorNotification = ({ status }: { status: boolean | null }) => {
  switch (status) {
    case null:
      return null;
    case true:
      return <p className="mt-1 text-sm bg-neutral-500s">Успешно</p>;
    case false:
      return <p className="mt-1 text-sm bg-neutral-500s">Произошла ошибка</p>;
  }
};

export default ErrorNotification;
