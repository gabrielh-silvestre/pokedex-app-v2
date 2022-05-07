function LoadingDots() {
  return (
    <div className="flex col-span-full justify-self-center mb-10">
      <div
        className={'h-2.5 w-2.5 bg-red-700 rounded-full mr-1 animate-bounce'}
      ></div>
      <div
        className={'h-2.5 w-2.5 bg-red-700 rounded-full mr-1 animate-bounce200'}
      ></div>
      <div
        className={'h-2.5 w-2.5 bg-red-700 rounded-full animate-bounce400'}
      ></div>
    </div>
  );
}

export { LoadingDots };
