
class LikedTracks:
    def __init__(self, title, trackId, artistName, artistId, cover, duration):
        self.title = title
        self.trackId = trackId
        self.artistName = artistName
        self.artistId = artistId
        self.cover = cover
        self.duration = duration

    def track_data(self):
        result = {
            "title": self.title,
            "trackId": self.trackId,
            "artistName": self.artistName,
            "artistId": self.artistId,
            "cover": self.cover,
            "duration": self.duration
        }
        return result
