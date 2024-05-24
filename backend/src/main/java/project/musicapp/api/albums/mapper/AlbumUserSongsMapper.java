package project.musicapp.api.albums.mapper;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;
import project.musicapp.api.albums.dto.PlaylistCreatorDTO;
import project.musicapp.api.albums.dto.AlbumUserSongsDTO;
import project.musicapp.api.albums.model.Album;
import project.musicapp.api.songs.dto.SongUserDTO;
import project.musicapp.api.users.model.User;

import java.util.List;

@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AlbumUserSongsMapper {
    private User user;
    private Album album;
    private List<SongUserDTO> songs;

    public AlbumUserSongsDTO toAlbumUserSongsDTO(){
        return AlbumUserSongsDTO.builder()
                .name(album.getName())
                .creator(getAlbumCreatorDTO())
                .creatingDate(album.getDate())
                .imagePath(album.getImagePath())
                .songs(songs).build();
    }

    private PlaylistCreatorDTO getAlbumCreatorDTO(){
        return new PlaylistCreatorDTO(user.getId(), user.getUsername());
    }
}

