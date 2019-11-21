const cookies = {
  read(name: string): string | null {
    const match = document.cookie.match(
      new RegExp("(^|;\\s*)(" + name + ")=([^;]*)")
    );
    return match ? decodeURIComponent(match[3]) : null;
  }
};

export default cookies;
