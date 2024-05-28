package project.musicapp.api.profiles.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import project.musicapp.api.albums.dto.AlbumUserSongsDTO;
import project.musicapp.api.albums.service.AlbumService;
import project.musicapp.api.playlists.dto.PlaylistUserSongsDTO;
import project.musicapp.api.playlists.service.PlaylistService;
import project.musicapp.api.profiles.dto.ProfileDTO;
import project.musicapp.api.profiles.dto.ProfileUserDTO;
import project.musicapp.api.profiles.type.ProfileType;
import project.musicapp.api.search.type.SearchType;
import project.musicapp.api.songs.dto.SongUserDTO;
import project.musicapp.api.songs.service.SongService;
import project.musicapp.api.users.dto.UserBannerDTO;
import project.musicapp.api.users.service.UserService;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProfileQueryService {
    private final UserService userService;
    private final SongService songService;
    private final AlbumService albumService;
    private final PlaylistService playlistService;

    public UserBannerDTO findUserBannerByUserId(int id){
        return this.userService.findUserBannerById(id);
    }

    public List<SongUserDTO> findUserSongsByUserId(int id, int limit, int offset){
        return this.songService.findAllSongUsersByUserId(id, limit, offset);
    }

    public List<AlbumUserSongsDTO> findAlbumsByUserId(int id, int limit, int offset) {
        return this.albumService.findAllAlbumsByUserId(id, limit, offset);
    }

    public List<PlaylistUserSongsDTO> findPlaylistsByUserId(int id, int limit, int offset){
        return this.playlistService.findAllPlaylistUserSongsByUserId(id, limit, offset);
    }
}
